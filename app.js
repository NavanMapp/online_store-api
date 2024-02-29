require('dotenv').config()
const express = require('express')
const mongoURL = process.env.mongoURL
const mongoose = require('mongoose')
const router = require('./routes/userRoutes.js')
const app = express()


mongoose.connect(mongoURL)
    .then(() => {
        console.log('Successfully connected to mongoDB atlast')
    }).catch((error) => {
        console.error(error)
    })

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
