const mysql = require('mysql2');

const dbCreds = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
}

const connection = mysql.createConnection(dbCreds);

// Test the connection
const connectDB = () => {
    connection.connect((error) => {
        if (error) {
            console.error('Error connecting to MySQL database:', error);
        } else {
            console.log('Connected to MySQL database!');
        }
    })
}

module.exports = {
    connection,
    connectDB,
    dbCreds
};