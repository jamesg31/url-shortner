const mysql = require('mysql2');

module.exports = mysql.createPool({
    host: 'localhost',
    user: 'jamesg31',
    password: 'password',
    database: 'jamesg31',
});