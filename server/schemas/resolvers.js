import { Family, Chore, Parent, Child, Reward, Consequence } from '../models';

const createObject = async (Model, input) => {
    try {
        const newObject = await Model.create(input);
        return newObject;
    } catch (error) {
        console.error(`Error while adding ${Model.modelName.toLowerCase()}:`, error);
        throw new Error(`Failed to add ${Model.modelName.toLowerCase()}.`);
    }
};

const queryObjects = async (Model, filter) => {
  try {
    return await Model.find(filter);
  } catch (error) {
    console.error(`Error while querying ${Model.modelName.toLowerCase()}:`, error);
    throw new Error(`Failed to query ${Model.modelName.toLowerCase()}.`);
  }
};

const resolvers = {
    Query: {
        family: async (parent, { familyId }) => queryObjects(Family, { _id: familyId }),
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

export default resolvers;
    
// {
//         createFamily: async (_, { input }) => {
//             try {
//                 const {
//                     familyName,
//                     familyPasscode
//                 } = input;

//                 const newFamily = await Family.create({
//                     familyName,
//                     familyPasscode
//                 });

//                 return { newFamily };
//             } catch (error) {
//                 console.error("Error while adding family:", error);
//                 throw new Error("Failed to add family.");
//             }
//         },
        
//         createParent: async (_, { input }) => {
//             try {
//                 const {
//                     parentUsername,
//                     parentEmail,
//                     parentPhone,
//                     parentPassword,
//                     parentFamily
//                 } = input;
        
//                 const newParent = await Parent.create({
//                     parentUsername,
//                     parentEmail,
//                     parentPhone,
//                     parentPassword,
//                     parentFamily
//                 });
//                 return newParent;
//             } catch (error) {
//                 console.error("Error while adding parent:", error);
//                 throw new Error("Failed to add parent.");
//             }
//         },
//         createChild: async (_, { input }) => {
//             try {
//                 const {
//                     childUsername,
//                     childFamily,
//                     childChore,
//                     childReward,
//                     childCons
//                 } = input;

//                 const newChild = await Child.create({
//                     childUsername,
//                     childFamily,
//                     childChore,
//                     childReward,
//                     childCons
//                 });
//                 return newChild;
//             } catch (error) {
//                 console.error("Error while adding child:", error);
//                 throw new Error("Failed to add child.");
//             }
//         },
//         createReward: async (_, { input }) => {
//             try {
//                 const {
//                     rewardTitle,
//                     rewardText,
//                     rewardCost,
//                     rewardCount,
//                     rewardMaxCount,
//                     rewardIsSpent,
//                     rewardExpyDate
//                 } = input;
        
//                 const newReward = await Reward.create({
//                     rewardTitle,
//                     rewardText,
//                     rewardCost,
//                     rewardCount,
//                     rewardMaxCount,
//                     rewardIsSpent,
//                     rewardExpyDate
//                 });
//                 return newReward;
//             } catch (error) {
//                 console.error("Error while adding reward:", error);
//                 throw new Error("Failed to add reward.");
//             }
//         },
//         createConsequence: async (_, { input }) => {
//             try {
//                 const {
//                     consTitle,
//                     consText,
//                     consCount,
//                     consCost,
//                     consIsSpent
//                 } = input;
        
//                 const newConsequence = await Consequence.create({
//                     consTitle,
//                     consText,
//                     consCount,
//                     consCost,
//                     consIsSpent
//                 });
//                 return newConsequence;
//             } catch (error) {
//                 console.error("Error while adding consequence:", error);
//                 throw new Error("Failed to add consequence.");
//             };
//         }
//     }



// family: async (parent, { familyId }) => {
//             return Family.findOne( {_id: familyId })
//         },      
//         parents: async (parent, { familyId }) => {
//             return Parent.find({ familyId });
//         },
//         oneParent: async (parent, { parentId }) => {
//             return Parent.findOne({ _id: parentId });
//         },
//         childs: async (parent, { familyId }) => {
//             return Child.find({ familyId });
//         },
//         oneChild: async (parent, { childId }) => {
//             return Child.findOne({ _id: childId });
//         },
//         chores: async (parent, { entityId, entityType }) => {

//             let filter = {};
      
//             if (entityType === 'family') {
//                 filter = { familyId: entityId };
//             } else if (entityType === 'child') {
//                 filter = { childId: entityId };
//             } else if (entityType === 'chore') {
//                 filter = { choreId: entityId };
//             }
//             return Chore.find(filter);
//         },
//         oneChore: async (parent, { choreId }) => {
//             return Chore.findOne({ _id: choreId });
//         },
//         rewards: async (parent, { entityId, entityType }) => {

//             let filter = {};
      
//             if (entityType === 'family') {
//                 filter = { familyId: entityId };
//             } else if (entityType === 'child') {
//                 filter = { childId: entityId };
//             } else if (entityType === 'chore') {
//                 filter = { choreId: entityId };
//             }
//             return Reward.find(filter);
//         },
//         oneReward: async (parent, { rewardId }) => {
//             return Reward.findOne({ _id: rewardId });
//         },
//         consequences: async (parent, { entityId, entityType }) => {

//             let filter = {};
      
//             if (entityType === 'family') {
//                 filter = { familyId: entityId };
//             } else if (entityType === 'child') {
//                 filter = { childId: entityId };
//             } else if (entityType === 'chore') {
//                 filter = { choreId: entityId };
//             }
//             return Consequence.find(filter);
//         },
//         oneConsequence: async (parent, { consId }) => {
//             return Consequence.findOne({ _id: consId });
//         }