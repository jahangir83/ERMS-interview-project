const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const session = require('express-session')
const cookieParser = require('cookie-parser')


const oneDay = 1000 * 60 * 60 * 24;

const Middlewere = [
    cors(),
    morgan("dev"),
 
    session({
        secret: "thisProjectVeryScecret",
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: oneDay },
    }),


    // bindUserWithRequest(),
    // setLocals(),

    
]

module.exports = app => {
    Middlewere.forEach(m => {
        app.use(m)
    })
}