const typeDefs = `

    type Parent {
      _id: ID
      parentUsername: String
      parentEmail: String
      parentPhone: String
    }

  input ParentInput{
    parentUsername: String
      parentEmail: String
      parentPhone: String
  }

  type Query {
    parents: [Parent]
  }
  
  type Mutation {
    addParent(parentUsername: String, parentEmail: String, parentPhone: String): Parent
  }`;


// TODO: define queries and mutations


module.exports = typeDefs;