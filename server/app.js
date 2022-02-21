const express = require('express');
const app = express();
const mongoose =require('mongoose');
const Product = require('./models/Product');
const Users = require('./models/Users')


mongoose
    .connect('mongodb://localhost:27017/test', {
        useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Connected to MongoDB...');
        })
        .catch(() => {
            console.log(err);
        });
