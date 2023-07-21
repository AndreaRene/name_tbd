const typeDefs = `
  type Chore {
    _id: ID
    choreTitle: String!
    choreText: String!
  }

  type Query {
    chores: [Chore]
  }`;

module.exports = typeDefs;