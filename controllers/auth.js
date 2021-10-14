const { OAuth2Client } = require('google-auth-library');
const db = require('../database');
const clientId = '1064340871794-5mn674kkvp5sdjnb7bdjoukrr77ao5pq.apps.googleusercontent.com';
const client = new OAuth2Client(clientId);

/* authenticate google login, send back session
{
    token:
}
*/
exports.postGoogle = (req, res, next) => {
    const { token } = req.body;
    client.verifyIdToken({
        idToken: token,
        audience: clientId
    }, (err, login) => {
        const { name, email, sub } = login.getPayload();
        db.getConnection((err, conn) => {
            if (err) throw err;
            conn.query('INSERT INTO users (google_id, name, email, admin) VALUES (?, ?, ?, false) ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID(id), name = ?, email = ?',
                [sub, name, email, name, email], (err, results) => {
                    conn.release();
                    req.session.userId = results.insertId;
                    res.status(200).send();
                })
        })
    });
}