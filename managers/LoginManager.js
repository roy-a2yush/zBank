const { hashPassword, verifyPassword } = require('../utils/passwordUtils')
const { createUser, getUserByEmail, getUserByEmailAndPassword } = require('../repository/userRepo')

exports.login = async(req, res, next) => {
    email = req.body.email
    password = req.body.password
    user = await getUserByEmail(email)
    if (user) {
        hashedPassword = user.password
        isValid = await verifyPassword(password, hashedPassword)
        if (isValid) {
            req.session.isAuth = true
            req.session.username = user.username
            req.session.firstName = user.firstName
            req.session.lastName = user.lastName
            req.session.email = user.email
            req.session.phoneNumber = user.phoneNumber
            res.status(200).render("dashboard.ejs", {page: 'Dashboard', organisationName: 'Zephyr', firstName: 'Aayush', showHeader: true})
        } else {
            res.status(401).render('failed.ejs', {page: 'Failed', message1: 'Invalid credentials', message2: 'Please try again', showHeader: false})
        }
    } else {
        res.status(401).render('failed.ejs', {page: 'Failed', message1: 'Invalid credentials', message2: 'Please try again', showHeader: false})
    }
}

exports.registerUser = async(req, res, next) => {
    firstName = req.body.firstName
    lastName = req.body.lastName
    email = req.body.email
    password1 = req.body.password1
    password2 = req.body.password2
    phoneNumber = req.body.phoneNumber
    user = await getUserByEmail(email)
    if (user) {
        res.status(409).render('failed.ejs', {page: 'Failed', message1: 'User already exists', message2: 'Please login', showHeader: false})
        return
    }
    if (password1 !== password2) {
        res.status(400).render('failed.ejs', {page: 'Failed', message1: 'Passwords do not match', message2: 'Please try again', showHeader: false})
        return
    }
    password = await hashPassword(password1)
    console.log(password)
    userObj = {
        'firstName': firstName,
        'lastName': lastName,
        'email': email,
        'password': password,
        'phoneNumber': phoneNumber
    }
    try {
        user = await createUser(userObj)
        res.status(200).render('successful.ejs', {user: user, page: 'Successful', showHeader: false})
        return
    } catch (error) {
        res.status(500).render('failed.ejs', {page: 'Failed', message1: 'Something went wrong', message2: 'Please try again', showHeader: false})
        return
    }
}

exports.logout = async (req, res, next) => {
    req.session.destroy((err) => {
        if (err) {
            res.status(400).send("Could not logout")
        } else {
            res.status(200).redirect("/")
        }
    })
}