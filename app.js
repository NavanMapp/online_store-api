require('dotenv').config()
const express = require('express')
const router = require('./routes/userRoutes.js')
const app = express()


router.get((req, res, next) => {
    console.log('Request received!')
    next()
})

app.use((req, res, next) => {
    res.status(201)
    next()
})

app.use((req, res, next) => {
    res.send({ message: 'Your request was successful!' })
    next()
})

app.use((req, res, next) => {
    console.log('Response sent successfully!')
})

module.exports = app
