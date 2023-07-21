const typeDefs = `
  type Chore {
    _id: ID
    choreTitle: String!
    choreText: String!
  }

  type Query {
    chores: [Chore]
    oneChore(choreId: ID!): Chore
  }`;

module.exports = typeDefs;