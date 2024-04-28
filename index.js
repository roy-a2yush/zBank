const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const { connectDB } = require('./config/db')
session = require('./config/session')
const indexRoutes = require('./routes/index')

const app = express();

app.use(express.json());
app.set('view-engine', 'ejs')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/css', express.static(__dirname + '/css'));

connectDB()
session(app)

//-------
const sequelize = require('./models/index');
const User = require('./models/User');

// ... your Express app setup

sequelize.sync() // Creates tables if they don't exist
    .then(() => console.log('Models synchronized!'))
    .catch((err) => console.error('Error synchronizing models:', err));
//-------

app.use('/', indexRoutes)

const PORT = process.env.PORT || 3000

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)

module.exports = server
