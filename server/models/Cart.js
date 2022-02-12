const { Schema, model } = require('mongoose');

const cartSchema = new Schema (
  {
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product'
      }
    ]
  }
);

const Cart = model('Cart', cartSchema);

module.exports = Cart;