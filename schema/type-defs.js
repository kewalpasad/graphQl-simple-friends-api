const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!,
    name: String!,
    username: String!,
    age: Int!,
    nationality: String,
    friends: [User]
  }

  type Movie {
    id: ID!,
    name: String!,
    yearOfPublication: Int!,
    isInTheaters: Boolean!,
  }

  type Query {
    users: [User!]!,
    user(id: ID!): User!,
    Movies: [Movie!]!,
    Movie(name: String!): Movie!,
  }

  input CreateUserInput {
    name: String!,
    username: String!,
    age: Int!,
    nationality: String
  }

  input UpdateUserName {
    id: ID!,
    newUserName: String!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!,
    updateUserName(input: UpdateUserName) : User!,
    deleteUser(id: ID!): User
  }
`

module.exports = {typeDefs}