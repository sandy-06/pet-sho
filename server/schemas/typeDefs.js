const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    isAdmin: Boolean
   
  }

  type Product {
    _id: ID
    name: String
    prices: Number
    quantity: Number
    category: String
    image: String
  }
  type Cart {
    _id: ID
    
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    products: Product
    
    
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    
  }
`;

module.exports = typeDefs;
