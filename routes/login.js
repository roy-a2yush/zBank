//node modules
const express = require('express')

//files
const Login = require('../managers/LoginManager')
const isAuth = require('../helpers/isAuth')

//cconfigure
const router = express.Router()

router.get('/', (req, res) => {
    if (req.session.isAuth) {
        res.render("dashboard.ejs", {page: 'Dashboard', organisationName: 'Zephyr', firstName: 'Aayush', showHeader: true})
    } else {
        res.render('login.ejs', {page: 'Login', showHeader: false})
    }
})

// @route create login  POST /
router.post('/', Login.login)

router.get('/register', (req, res) => {
    res.render('register.ejs', {page: 'Register', showHeader: false})
})

//@route create register  POST /register
router.post('/register', Login.registerUser)

//@route create logout POST /logout
router.get('/logout', Login.logout)
router.post('/logout', Login.logout)

module.exports = router
