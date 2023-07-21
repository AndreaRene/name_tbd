const { Chore } = require('../models');

const resolvers = {
    Query: {
        chores: async () => {
            return Chore.find();
        }
    }
};

module.exports = resolvers;