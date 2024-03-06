require('dotenv').config()
const express = require('express')
const mongoURL = process.env.mongoURL
const mongoose = require('mongoose')
const router = require('./routes/userRoutes.js')
const Products = require('./models/products.js')

const app = express()


mongoose.connect(mongoURL)
    .then(() => {
        console.log('Successfully connected to mongoDB atlast')
    }).catch((error) => {
        console.error(error)
    })

//  Reaching the API's database and writing or loading stuff into it from our frontend
app.post('api/product', (req, res, next) => {
    const product = [{
        userId: req.params.userId,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
    }]
    product.save().then(() => {
        res.status(201).json({
            message: 'You have saved a product successfully'
        })
    }).catch((error) => {
        res.status(400).json({
            error: error
        })
    })
})

// Retreive or read our product from our database
// so that we can either display it for our user on the frontend
app.use('api/product', (req, res, next) => {
    products.find().then((products) => {
        res.status(200).json(products)
    }).catch((error) => {
        res.status(400).json({
            error: error
        })
    })
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
