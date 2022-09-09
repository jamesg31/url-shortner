const express = require('express');
const session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var mysql2 = require('mysql2/promise');
const path = require('path');
const db = require('./database');
const app = express();
const port = 3001;

var options = {
    host: 'localhost',
    port: 3306,
    user: 'jamesg31',
    password: 'password',
    database: 'jamesg31'
};

var connection = mysql2.createPool(options);
var sessionStore = new MySQLStore({}, connection);

app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));

const urlController = require('./controllers/urls');
var urlRouter = require('./routes/urls');
var authRouter = require('./routes/auth');

app.use(express.json())
//app.use(express.static(path.resolve(__dirname, 'public')));

// serve react app
//app.get('/', (req, res, next) => {
//    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
//});

// url and auth api
app.use('/api/urls/', urlRouter);
app.use('/api/auth/', authRouter);

// all other requests
app.get('*', urlController.get)

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
});

module.exports = app;