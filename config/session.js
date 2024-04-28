const SESSION = require('express-session');
const MySQLStore = require('express-mysql-session')(SESSION);

const { connection, dbCreds } = require('./db');
const sessionStore = new MySQLStore(dbCreds, connection);

// Session middleware configuration
const sessions = (app) => {
    app.use(SESSION({
        secret: '@34152$3254dgein',
        resave: false,
        saveUninitialized: false,
        store: sessionStore
    }))
}

module.exports = sessions