const {
    Chore,
    Parent,
    Child,
    Reward,
    Consequence       
} = require('../models');
const Family = require('../models/Family');

const resolvers = {
    Query: {
        family: async (parent, { familyId }) => {
            return Family.findOne( {_id: familyId })
        },      
        parents: async (parent, { familyId }) => {
            return Parent.find({ familyId });
        },
        oneParent: async (parent, { parentId }) => {
            return Parent.findOne({ _id: parentId });
        },
        childs: async (parent, { familyId }) => {
            return Child.find({ familyId });
        },
        oneChild: async (parent, { childId }) => {
            return Child.findOne({ _id: childId });
        },
        chores: async (parent, { entityId, entityType }) => {

            let filter = {};
      
            if (entityType === 'family') {
                filter = { familyId: entityId };
            } else if (entityType === 'child') {
                filter = { childId: entityId };
            } else if (entityType === 'chore') {
                filter = { choreId: entityId };
            }
            return Chore.find(filter);
        },
        oneChore: async (parent, { choreId }) => {
            return Chore.findOne({ _id: choreId });
        },
        rewards: async (parent, { entityId, entityType }) => {

            let filter = {};
      
            if (entityType === 'family') {
                filter = { familyId: entityId };
            } else if (entityType === 'child') {
                filter = { childId: entityId };
            } else if (entityType === 'chore') {
                filter = { choreId: entityId };
            }
            return Reward.find(filter);
        },
        oneReward: async (parent, { rewardId }) => {
            return Reward.findOne({ _id: rewardId });
        },
        consequences: async (parent, { entityId, entityType }) => {

            let filter = {};
      
            if (entityType === 'family') {
                filter = { familyId: entityId };
            } else if (entityType === 'child') {
                filter = { childId: entityId };
            } else if (entityType === 'chore') {
                filter = { choreId: entityId };
            }
            return Consequence.find(filter);
        },
        oneConsequence: async (parent, { consId }) => {
            return Consequence.findOne({ _id: consId });
        }
    },

    Mutation: {
        createFamily: async (_, { input }) => {
            try {
                const {
                    familyName,
                    familyPasscode,
                    parentUsername,
                    parentEmail,
                    parentPhone,
                    parentPassword
                } = input;

                const newFamily = await Family.create({
                    familyName,
                    familyPasscode
                });

                const newParent = await Parent.create({
                    parentUsername,
                    parentEmail,
                    parentPhone,
                    parentPassword,
                    parentFamily: newFamily._id
                });

                return { newFamily, newParent };
            } catch (error) {
                console.error("Error while adding family and parent:", error);
                throw new Error("Failed to add family and parent.");
            }
        },
        
        createParent: async (_, { input }) => {
            try {
                const {
                    parentUsername,
                    parentEmail,
                    parentPhone,
                    parentPassword,
                    parentFamily
                } = input;
        
                const newParent = await Parent.create({
                    parentUsername,
                    parentEmail,
                    parentPhone,
                    parentPassword,
                    parentFamily
                });
                return newParent;
            } catch (error) {
                console.error("Error while adding parent:", error);
                throw new Error("Failed to add parent.");
            }
        },
        createChild: async (_, { input }) => {
            try {
                const {
                    childUsername,
                    childFamily,
                    childChore,
                    childReward,
                    childCons
                } = input;

                const newChild = await Child.create({
                    childUsername,
                    childFamily,
                    childChore,
                    childReward,
                    childCons
                });
                return newChild;
            } catch (error) {
                console.error("Error while adding child:", error);
                throw new Error("Failed to add child.");
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
                    consCount,
                    consCost,
                    consIsSpent
                } = input;
        
                const newConsequence = await Consequence.create({
                    consTitle,
                    consText,
                    consCount,
                    consCost,
                    consIsSpent
                });
                return newConsequence;
            } catch (error) {
                console.error("Error while adding consequence:", error);
                throw new Error("Failed to add consequence.");
            };
        }
    }
};

    module.exports = resolvers;