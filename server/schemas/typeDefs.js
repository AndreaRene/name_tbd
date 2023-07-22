const typeDefs = `
  type Chore {
    _id: ID
    choreTitle: String!
    choreText: String!
    choreComplete: Boolean
  }

  type Query {
    chores: [Chore]
    oneChore(choreId: ID!): Chore
  }`;

module.exports = typeDefs;