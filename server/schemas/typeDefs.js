const typeDefs = `
  type Family {
    _id: ID
    familyName: String
    familyPasscode: String
    parentJoinCode: String
    childJoinCode: String
    parents: [Parent]
    children: [Child]
    chores: [Chore]
    rewards: [Reward]
    consequences: [Consequence]
  }

  input FamilyInput {
    familyName: String
    familyPasscode: String
  }
  
  input UpdateFamilyInput {
    familyName: String
    familyPasscode: String
    parentJoinCode: String
    childJoinCode: String
    }

  input UpdateFamilyArrayFieldsInput {
    parents: [ID]
    children: [ID]
    chores: [ID]
    rewards: [ID]
    consequences: [ID]
  }

  type Parent {
    _id: ID
    parentUsername: String
    parentEmail: String!
    parentPhone: String
    parentPassword: String!
    family: Family
  }

  input ParentInput{
    parentUsername: String
    parentEmail: String!
    parentPhone: String
    parentPassword: String!
    family: ID
  }
  
  input UpdateParentInput {
    parentUsername: String
    parentEmail: String!
    parentPhone: String
    parentPassword: String!
  }

  type Child{
    _id: ID
    childUsername: String!
    family: Family
    chores: [Chore]
    rewards: [Reward]
    consequences: [Consequence]
  }

  input ChildInput {
    childUsername: String!
    family: ID
  }

  input UpdateChildInput {
  childUsername: String!
  }

  input UpdateChildArrayFieldsInput {
    chores: [ID]
    rewards: [ID]
    consequences: [ID]
  }

  type Chore {
    _id: ID
    family: Family
    choreTitle: String!
    choreText: String
    recurring: Boolean
    recurringFrequency: String
    recurringStartDate: String
    recurringEndDate: String
    children: [ChildChoreAssociation]
  }
  
  input ChoreInput {
    choreTitle: String!
    choreText: String
    recurring: Boolean
    recurringFrequency: String
    recurringStartDate: String
    recurringEndDate: String
    family: ID
  }
  
  input UpdateChoreInput {
    choreTitle: String!
    choreText: String
    recurring: Boolean
    recurringFrequency: String
    recurringStartDate: String
    recurringEndDate: String
  }
  
  input UpdateChoreArrayFieldsInput {
    children: [UpdateChildChoreAssociationInput]
  }

  Type ChildChoreAssociation {
    child: Child
    reward: Reward
    consequence: Consequence
    choreDueDate: String
    choreCompletedDate: [String]
    chorePoints: Int
  }

  input ChildChoreAssociationInput {
    child: ID
    reward: ID
    consequence: ID
    choreDueDate: String
    chorePoints: Int
  }
  
  input UpdateChildChoreAssociationInput {
    child: ID
    reward: ID
    consequence: ID
    choreDueDate: String
    chorePoints: Int
    choreCompletedDate: [UpdateChoreCompletedDateInput]
  }
  
  input UpdateChoreCompletedDateInput{
    choreCompletedDate: [String]
  }

  type Reward {
    _id: ID
    rewardTitle: String!
    rewardText: String
    rewardCost: Int
    rewardCount: Int
    rewardMaxCount: Int
    family: Family
    child: Child
    chore: Chore
  }

  input RewardInput {
    rewardTitle: String!
    rewardText: String
    rewardCost: Int
    rewardCount: Int
    rewardMaxCount: Int
    family: ID
  }

  type Consequence {
    _id: ID
    consTitle: String!
    consText: String
    consCount: Int
    consCost: Int
    family: Family
    child: Child
    chore: Chore
  }

  input ConsequenceInput {
    consTitle: String!
    consText: String
    consCount: Int
    consCost: Int
    family: ID
  }

  type Query {
    allFamilies: [Family]
    oneFamily(familyId: ID!): Family
    allParents: [Parent]
    oneParent(parentId: ID!): Parent
    allChildren: [Child]
    oneChild(childId: ID!): Child
    allChores: [Chore]
    oneChore(choreId: ID!): Chore
    allRewards: [Reward]
    oneReward(rewardId: ID!): Reward
    allConsequences: [Consequence]
    oneConsequence(consId: ID!): Consequence
  }

  type Mutation {
    createFamily(input: FamilyInput!): Family
    createParent(input: ParentInput!): Parent
    createChild(input: ChildInput): Child
    createChore(input: ChoreInput): Chore
    createReward(input: RewardInput): Reward
    createConsequence(input: ConsequenceInput): Consequence
    updateFamily(familyId: ID!, input: UpdateFamilyInput): Family
    updateParent(parentId: ID!, input: UpdateParentInput): Parent
    updateChild(childId: ID!, input: UpdateChildInput): Child
    updateConsequence(consId: ID!, input: UpdateConsequenceInput): Consequence
    updateFamilyArrayFields(familyId: ID!, input: UpdateFamilyArrayFieldsInput): Family
    updateChildArrayFields(childId: ID!, input: UpdateChildArrayFieldsInput): Child
    updateChoreArrayFields(choreId: ID!, input: UpdateChoreArrayFieldsInput): Chore
    }
`;


// TODO: define queries and mutations


module.exports = typeDefs;