const { Schema, model } = require('mongoose');
const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  id:{
    type: Number,
    autoIncrement: true,
  },
  name: {
    type: String,
    
    unique: true,
  },
  price: {
    type: Number,
    
  },
  quantity: {
    type: Number,
    
  },
  category: {
    type: String,
    
    unique: true,
  },
  image: {
    type: String,
    
  },
  description: {
    type: String,
    
  }
});

const Product = model('Product', productSchema);

module.exports = Product;