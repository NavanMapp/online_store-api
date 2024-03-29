const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true }
})

module.exports = mongoose.model('Products', productSchema)