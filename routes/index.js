//node modules
const express = require('express')

//files
const Login = require('./login')

//cconfigure
const router = express.Router()

//routes
router.use('/', Login)
router.use('/login', Login)
// router.use('/product', Product)
router.get('/product/add', (req, res) => {
    res.render('addProduct.ejs', {page: 'Add Product', submitUrl: '/product/add', docs: '', buttonName: 'Add Product', icon: 'icon-plus', numProducts: 1})
})

module.exports = router
