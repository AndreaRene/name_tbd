const {
    Family,
    Parent,
    Child,
    Chore,
    Reward,
    Consequence
} = require('../models');

// const queryObjects = async (Model, filter) => {
//     console.log("Pre Try", Model, filter);
//     try {
//         return await Model.find(filter);
//   } catch (error) {
//         console.error(`Error while querying ${Model.modelName}:`, error);
//         throw new Error(`Failed to query ${Model.modelName}.`);
//   }
// };

// const createObject = async (Model, input) => {
//     try {
//         const newObject = await Model.create(input);
//         return newObject;
//     } catch (error) {
//         console.error(`Error while adding ${Model.modelName.toLowerCase()}:`, error);
//         throw new Error(`Failed to add ${Model.modelName.toLowerCase()}.`);
//     }
// };

const resolvers = {

    Query: {
        allFamilies: async () => Family.find(),
        family: async (_, { familyId }) => {
            console.log('Log:', familyId);
            return Family.findOne({_id: familyId}).populate('parents')
        },
        parents: async (_, { familyId }) => {
            const params = familyId ? { _id: familyId } : {};
            return Parent.find(params)
        },
        allParents: async () => Parent.find(),
        oneParent: async (_, { parentId }) => {
            return Parent.findOne({_id: parentId})
        },

         
    },
    // Query: {
    //     allFamilies: async () => queryObjects(Family, {}),
    //     family: async (_, { familyId }) => queryObjects( Family, { _id: familyId }),
    //     allParents: async () => queryObjects(Parent, {}),
    //     parents: async (parent, { familyId }) => queryObjects(Parent, { familyId }),
    //     oneParent: async (parent, { parentId }) => queryObjects(Parent, { _id: parentId }),
    //     children: async (parent, { familyId }) => queryObjects(Child, { familyId }),
    //     oneChild: async (parent, { childId }) => queryObjects(Child, { _id: childId }),
    //     chores: async (parent, { entityId, entityType }) => {
    //         let filter = {};
    //         if (entityType === 'family') {
    //             filter = { familyId: entityId };
    //         } else if (entityType === 'child') {
    //             filter = { childId: entityId };
    //         } else if (entityType === 'chore') {
    //             filter = { choreId: entityId };
    //         }
            
    //         return queryObjects(Chore, filter);
    //     },
    // },

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
