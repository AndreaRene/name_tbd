const {
    Chore,
    Parent,
    Child,
    Reward,
    Consequence       
} = require('../models');

const resolvers = {
    Query: {
        chores: async () => {
            return Chore.find();
        },
        oneChore: async (parent, { choreId }) => {
            return Chore.findOne({ _id: choreId });
        },
        parents: async () => {
            return Parent.find()
        },
        oneParent: async (parent, { parentId }) => {
            return Parent.findOne({_id: parentId})
        },
        childs: async () => {
            return Child.find()
        },
        oneChild: async (parent, { childId }) => {
            return Child.findOne({_id: childId})
        },
        rewards: async () => {
            return Reward.find()
        },
        oneReward: async (parent, { rewardId }) => {
            return Reward.findOne({_id: rewardId})
        },
        consequences: async () => {
            return Consequence.find()
        },
        oneConsequence: async (parent, { consId }) => {
            return Consequence.findOne({_id: consId})
        }
    },

    Mutation: {
  addParent: async (parent, { parentUsername, parentEmail, parentPhone }) => {
    try {
      const newParent = await Parent.create({ parentUsername, parentEmail, parentPhone });
      return newParent;
    } catch (error) {
      console.error("Error while adding parent:", error);
      throw new Error("Failed to add parent.");
    }
  }
}

};

module.exports = resolvers;