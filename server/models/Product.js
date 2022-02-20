const { Schema, model } = require('mongoose');
const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  id:{
    type: Number,
    autoIncrement: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

const Product = model('Product', productSchema);

module.exports = Product;