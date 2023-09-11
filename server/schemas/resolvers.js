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
            try {
                updateFamilyWithObject(newObject.familyId, newObject._id);
            } catch (updateError) {
                console.error(`Error while updating family with ${Model.modelName}:`, updateError);
                throw new Error(`Failed to update family with ${Model.modelName}.`);
        }
        return newObject;
    } catch (error) {
        console.error(`Error while adding ${Model.modelName.toLowerCase()}:`, error);
        throw new Error(`Failed to add ${Model.modelName.toLowerCase()}.`);
    }
};

const updateObject = async (Model, objectId, updateInput) => {
    try {
        const updatedObject = await Model.findOneAndUpdate(
            { _id: objectId }, 
            { $set: updateInput }, 
            { new: true } 
        );

        return updatedObject;
    } catch(error) {
        console.error('Error updating object:', error);
        throw new Error('Failed to update object.');
     }
}


const updateObjectArrays = async (objectId, input, updateFunction) => {
    try {
        const updatedObject = await updateFunction(
            { _id: objectId },
            { $addToSet: input },
            { new: true }
        );
        return updatedObject;
    } catch (error) {
        console.error('Error updating object relationships:', error);
        throw new Error('Failed to update object relationships.');
    };
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
            return Parent.findOne({ _id: parentId })
                .populate('family');
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
                .populate('consequences')
                .populate('family');
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
        updateFamily: (_, { familyId, input }) => updateObject(Family, familyId, input),
        updateParent: (_, { parentId, input }) => updateObject(Parent, parentId, input),
        updateChild: (_, { childId, input }) => updateObject(Child, childId, input),
        updateChore: (_, { choreId, input }) => updateObject(Chore, choreId, input),
        updateFamilyArrayFields: (_, { familyId, input }) => {
            return updateObjectArrays(familyId, input, Family.findOneAndUpdate.bind(Family))
        },
        updateChildArrayFields: (_, { childId, input }) => {
            return updateObjectArrays(childId, input, Child.findOneAndUpdate.bind(Child))
        },
    },
};

module.exports = resolvers;
