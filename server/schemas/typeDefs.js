const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
}

type Query {
    user(username: String!): User
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
}

type Auth {
    token: ID!
    user: User
}
`;

module.exports = typeDefs;