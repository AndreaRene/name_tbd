const {
    Family,
    Chore,
    Parent,
    Child,
    Reward,
    Consequence
} = require('../models');

const queryObjects = async (Model, filter) => {
    try {
      console.log(Model, filter)
      return await Model.find(filter);
  } catch (error) {
    console.error(`Error while querying ${Model.modelName.toLowerCase()}:`, error);
    throw new Error(`Failed to query ${Model.modelName.toLowerCase()}.`);
  }
};

const createObject = async (Model, input) => {
    try {
        const newObject = await Model.create(input);
        return newObject;
    } catch (error) {
        console.error(`Error while adding ${Model.modelName.toLowerCase()}:`, error);
        throw new Error(`Failed to add ${Model.modelName.toLowerCase()}.`);
    }
};

const resolvers = {
    Query: {
        families: async () => queryObjects(Family, {}),
        family: async (_, { familyId }) => {
            console.log(Family, { _id: familyId });
            return queryObjects(Family, { _id: familyId });
        },
        parentsAll: async () => queryObjects(Parent, {}),
        parents: async (parent, { familyId }) => queryObjects(Parent, { familyId }),
        oneParent: async (parent, { parentId }) => queryObjects(Parent, { _id: parentId }),
        childs: async (parent, { familyId }) => queryObjects(Child, { familyId }),
        oneChild: async (parent, { childId }) => queryObjects(Child, { _id: childId }),
        chores: async (parent, { entityId, entityType }) => {
            let filter = {};
            if (entityType === 'family') {
                filter = { familyId: entityId };
            } else if (entityType === 'child') {
                filter = { childId: entityId };
            } else if (entityType === 'chore') {
                filter = { choreId: entityId };
            }
            
            return queryObjects(Chore, filter);
        },
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
