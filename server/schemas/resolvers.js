const {
    Parent      
} = require('../models');

const resolvers = {
    Query: {

        parents: async () => {
            return Parent.find()
        },

    },

    Mutation: {
  addParent: async (parent, { parentUsername, parentEmail, parentPhone }) => {
    try {
        const newParent = await Parent.create({ parentUsername, parentEmail, parentPhone });
        console.log(newParent);
      return  newParent ;
    } catch (error) {
      console.error("Error while adding parent:", error);
      throw new Error("Failed to add parent.");
    }
  }
}

};

module.exports = resolvers;