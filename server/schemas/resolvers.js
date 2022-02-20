//const { AuthenticationError } = require('apollo-server-express');
const { User, Product } = require('../models');
//const { signToken } = require('../utils/auth');

const { signToken } = require('../utils/auth')
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    products: async () => {
      return await Product.find()      
    }

     // throw new AuthenticationError('Not logged in');
  },
    Mutation:{
        addUser: async (parent, args) => {
            const user = await User.create(args);
          
            return user;
          },
          login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
          
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const correctPw = await user.isCorrectPassword(password);
          
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            return user;
          },
          addProduct: async (parent, args) => {
            const product = await Product.create(args);
            return Product;

          },
          deleteProduct:async () => {
            return await Product.findByIdAndDelete()

          },
        }  
      }
  

  
  
  module.exports = resolvers;
