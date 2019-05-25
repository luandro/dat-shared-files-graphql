const Query = `
  type Query {
    listLinks: [String]
    shareAll: [String]
    datLink(hash: String!): String
  }
`

const Mutation = `
  type Mutation {
    removeLink(hash: String!): Boolean
    shareFile(path: String!): String
    shareAll: [String]
  }
`

const Schema = () => [`
  schema {
    query: Query
    mutation: Mutation
  }
`]

module.exports = [
  Schema,
  Query,
  Mutation,
]