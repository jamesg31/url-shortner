const db = require("../database");

// return specific url
exports.getParamURL = (req, res, next) => {
    db.getConnection((err, conn) => {
        if (err) throw err;
        conn.query('SELECT * FROM urls WHERE url=?', [req.params.url], (err, results) => {
            conn.release();
            res.send(results);
        })
    })
};

// get all urls from user
exports.getURL = (req, res, next) => {
    if (req.session.userId != null) {
        db.getConnection((err, conn) => {
            if (err) throw err;
            conn.query('SELECT * FROM urls WHERE user_id = ?', [req.session.userId], (err, results) => {
                conn.release();
                console.log(results);
                res.send(results);
            })
        });
    } else {
        res.send([]);
    }
}

/* create url
{
    url:
    destination:
}
*/
exports.postURL = (req, res, next) => {
    let { url, destination } = req.body;

    if (req.session.userId != null) {
        db.getConnection((err, conn) => {
            if (err) throw err;
            conn.query('INSERT INTO urls (user_id, url, destination) VALUES (?, ?, ?)', [req.session.userId, url, destination], (err, results) => {
                conn.release();
                res.status(201).send();
            })
        })
    } else {
        res.status(401).send();
    }
};

// redirect to url
exports.get = (req, res, next) => {
    let requestUrl = req.url.substring(1);
    db.getConnection((err, conn) => {
        if (err) throw err;
        conn.query('SELECT * FROM urls WHERE url=?', [requestUrl], (err, results) => {
            conn.release();
            if (results.length == 0) {
                res.status(404).send();
            } else {
                res.redirect(results[0].destination);
            }
        })
    })
};