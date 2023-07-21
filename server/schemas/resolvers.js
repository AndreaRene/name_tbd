import Chore from '../models/Chore.js';

const resolvers = {
    Query: {
        chores: async () => {
            return Chore.find();
        }
    }
};

module.exports = resolvers;