const { OAuth2Client } = require('google-auth-library');
const db = require('../database');
const clientId = '840964669560-lv3dkc9uuc15d24fr3e1tk46tq29k2fa.apps.googleusercontent.com';
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