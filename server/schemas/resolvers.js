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
        oneParent: async (parent, { parentId }) => {
            return Parent.findOne({_id: parentId})
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
    }
};

module.exports = resolvers;