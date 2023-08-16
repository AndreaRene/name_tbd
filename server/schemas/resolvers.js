const {
    Family,
    Parent,
    Child,
    Chore,
    Reward,
    Consequence
} = require('../models');

const createObject = async (Model, input) => {
    try {
        const newObject = await Model.create(input);
        console.log(newObject);
        return newObject;
    } catch (error) {
        console.error(`Error while adding ${Model.modelName.toLowerCase()}:`, error);
        throw new Error(`Failed to add ${Model.modelName.toLowerCase()}.`);
    }
};

const resolvers = {

    Query: {
        allFamilies: async () => Family.find(),
        oneFamily: async (_, { familyId }) => {
            return Family.findOne({ _id: familyId })
                .populate('parents')
                .populate({
                    path: 'children',
                    populate: [
                        { path: 'chores' },
                        { path: 'rewards' },
                        { path: 'consequences' }
                    ]
                })
                .populate({
                    path: 'chores',
                    populate: [
                        { path: 'rewards', },
                        { path: 'consequences' }
                    ]
                })
                .populate('rewards')
                .populate('consequences');
        },
        allParents: async () => Parent.find(),
        oneParent: async (_, { parentId }) => {
            return Parent.findOne({ _id: parentId });
        },
        allChildren: async () => Child.find(),
        oneChild: async (_, { childId }) => {
            return Child.findOne({ _id: childId })
                .populate({
                    path: 'chores',
                    populate: [
                        { path: 'rewards', },
                        { path: 'consequences' }
                    ]
                })
                .populate('rewards')
                .populate('consequences');
        },
        allChores: async () => Chore.find(),
        oneChore: async (_, { choreId }) => {
            return Chore.findOne({ _id: choreId })
                .populate('rewards')
                .populate('consequences');
        },
        allRewards: async () => Reward.find(),
        oneReward: async (_, { rewardId }) => {
            return Reward.findOne({ _id: rewardId })
        },
        allConsequences: async () => Consequence.find(),
        oneConsequence: async (_, { consId }) => {
            return Consequence.findOne({ _id: consId })
        }
    },
    Mutation: {
        createFamily: (_, { input }) => createObject(Family, input),
        createParent: (_, { input }) => createObject(Parent, input),
        createChild: (_, { input }) => createObject(Child, input),
        createChore: (_, { input }) => createObject(Chore, input),
        createReward: (_, { input }) => createObject(Reward, input),
        createConsequence: (_, { input }) => createObject(Consequence, input),
    },
};

module.exports = resolvers;
