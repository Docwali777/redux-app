const mongoose = require('mongoose');
let { Schema }  = mongoose

const bookSchema = Schema({
  title: String,
  description: String,
  images: String,
  price: Number
})

const BookShop = mongoose.model('Books', bookSchema)

module.exports = BookShop
