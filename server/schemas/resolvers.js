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
        createParent: async (_, { input }) => {
            try {
                const {
                    parentUsername,
                    parentEmail,
                    parentPhone,
                    parentPassword,
                    parentPin,
                    parentChild,
                    parentCoParent,
                    parentCode,
                } = input;
        
                const newParent = await Parent.create({
                    parentUsername,
                    parentEmail,
                    parentPhone,
                    parentPassword,
                    parentPin,
                    parentChild,
                    parentCoParent,
                    parentCode,
                });
                return newParent;
            } catch (error) {
                console.error("Error while adding parent:", error);
                throw new Error("Failed to add parent.");
            }
        },
        createReward: async (_, { input }) => {
            try {
                const {
                    rewardTitle,
                    rewardText,
                    rewardCost,
                    rewardCount,
                    rewardMaxCount,
                    rewardIsSpent,
                    rewardExpyDate
                } = input;
        
                const newReward = await Reward.create({
                    rewardTitle,
                    rewardText,
                    rewardCost,
                    rewardCount,
                    rewardMaxCount,
                    rewardIsSpent,
                    rewardExpyDate
                });
                return newReward;
            } catch (error) {
                console.error("Error while adding reward:", error);
                throw new Error("Failed to add reward.");
            }
        },
        createConsequence: async (_, { input }) => {
            try {
                const {
                    consTitle,
                    consText,
                    ConsCount,
                    consCost,
                    consIsSpent
                } = input;
        
                const newConsequence = await Consequence.create({
                    consTitle,
                    consText,
                    ConsCount,
                    consCost,
                    consIsSpent
                });
                return newConsequence;
            } catch (error) {
                console.error("Error while adding consequence:", error);
                throw new Error("Failed to add consequence.");
            }
        },
    },
};

module.exports = resolvers;