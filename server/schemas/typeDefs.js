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
    prices: Int
    quantity: Int
    category: String
    image: String
    description: String
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
