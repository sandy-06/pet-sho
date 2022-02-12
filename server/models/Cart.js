const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const cartSchema = new Schema ({

})

const Cart = model('Cart', cartSchema);

module.exports = Cart;