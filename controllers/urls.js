const db = require("../database");

// return if url is available
exports.getURL = (req, res, next) => {
    db.getConnection((err, conn) => {
        if (err) throw err;
        conn.query('SELECT * FROM urls WHERE url=?', [req.params.url], (err, results) => {
            conn.release();
            res.send(results);
        })
    })
};

/* create url
{
    token:
    url:
    destination:
}
*/
exports.postURL = (req, res, next) => {
    let url = req.body.url;
    let destination = req.body.destination;

    db.getConnection((err, conn) => {
        if (err) throw err;
        conn.query('INSERT INTO urls (url, destination) VALUES (?, ?)', [url, destination], (err, results) => {
            conn.release();
            res.status(201).send();
        })
    })
};