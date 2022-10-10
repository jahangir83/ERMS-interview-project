const Router  = require('express').Router();

const {addUser, upload , userLogin} = require('../Controller/UserController')
const signupValid = require('../validator/signupValid')
const loginValid = require('../validator/loginValid')

Router.post('/signup', signupValid, addUser)
Router.post('/login', loginValid, userLogin)



Router.get('/profile',(req, res) => {
    res.render('pages/editeProfile.ejs')
    // res.send("HI")
})

module.exports = Router