const express = require('express');
//var bodyParser = require('body-parser')
const db = require('./database');
const app = express();
const port = 3001;

app.use(express.json())

/*pool.getConnection((err, connection) => {
    connection.query('SELECT * FROM urls', [], (err, results) => {
        connection.release();
        console.log(results);
    })
})*/

var urlRouter = require('./routes/urls');

app.use('/api/urls', urlRouter);

app.use(function (req, res, next) {
    res.status(404).send();
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
});

module.exports = app;