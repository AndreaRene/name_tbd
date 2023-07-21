const { Chore } = require('../models');

const resolvers = {
    Query: {
        chores: async () => {
            return Chore.find();
        },
        oneChore: async (parent, { choreId }) => {
        return Chore.findOne({ _id: choreId });
    }
    }
};

module.exports = resolvers;