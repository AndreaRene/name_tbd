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
    
    type Parent {
      _id: ID
      parentUsername: String
      parentEmail: String!
      parentPhone: String
      parentPassword: String!
      family: Family
    }

    type Child{
      _id: ID
      childUsername: String!
      family: Family
      chores: [Chore]
      rewards: [Reward]
      consequences: [Consequence]
    }

    type Chore {
    _id: ID
    choreTitle: String!
    choreText: String
    choreDueDate: String
    choreCompletedDate: [String]
    chorePoints: Int
    family: Family
    children: [Child]
    rewards: [Reward]
    consequences: [Consequence]
  }

  type Reward {
    _id: ID
    rewardTitle: String!
    rewardText: String
    rewardCost: Int
    rewardCount: Int
    rewardMaxCount: Int
    family: Family
    children: [Child]
    chores: [Chore]
  }

  type Consequence {
    _id: ID
    consTitle: String!
    consText: String
    consCount: Int
    consCost: Int
    family: Family
    children: [Child]
    chores: [Chore]
  }

  input FamilyInput {
    familyName: String
    familyPasscode: String
    }

  input ParentInput{
    parentUsername: String
    parentEmail: String!
    parentPhone: String
    parentPassword: String!
  }

  input ChildInput{
      childUsername: String!
  }

  input ChoreInput {
    choreTitle: String!
    choreText: String
    choreDueDate: String
    chorePoints: Int
  }

  input RewardInput {
    rewardTitle: String!
    rewardText: String
    rewardCost: Int
    rewardCount: Int
    rewardMaxCount: Int
  }

  input ConsequenceInput {
    consTitle: String!
    consText: String
    consCount: Int
    consCost: Int
  }
  
  input UpdateFamilyInput {
    familyName: String
    familyPasscode: String
    parentJoinCode: String
    childJoinCode: String
    }

  input UpdateFamilyRelationshipsInput {
    parents: [ID]
    children: [ID]
    chores: [ID]
    rewards: [ID]
    consequences: [ID]
  }

  input UpdateParentInput {
    parentUsername: String
    parentPhone: String
    parentPassword: String!
  }

  input UpdateParentRelationshipsInput {
    family: ID
  }

  input UpdateChildInput {
    childUsername: String!
  }

  input UpdateChildRelationshipsInput {
    family: ID
    chores: [ID]
    rewards: [ID]
    consequences: [ID]
  }

  input UpdateChoreInput {
    choreTitle: String!
    choreText: String
    choreDueDate: String
  }

  input UpdateChoreRelationshipsInput {
    family: ID
    children: [ID]
    rewards: [ID]
    consequences: [ID]
  }

  input UpdateRewardInput {
    rewardTitle: String!
    rewardText: String
    rewardCost: Int
    rewardCount: Int
    rewardMaxCount: Int
  }

  input UpdateRewardRelationshipsInput {
    family: ID
    children: [ID]
    chores: [ID]
  }

  input UpdateConsequenceInput {
    consTitle: String!
    consText: String
    consCount: Int
    consCost: Int
  }

  input UpdateConsequenceRelationshipsInput {
    family: ID
    children: [ID]
    chores: [ID]
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
    updateChild(childId: ID!, input: UpdateChildInput): Child,
    updateChore(choreId: ID!, input: UpdateChoreInput): Chore,
    updateReward(rewardId: ID!, input: UpdateRewardInput): Reward,
    updateConsequence(consId: ID!, input: UpdateConsequenceInput): Consequence,
    updateFamilyRelationships(familyId: ID!, input: UpdateFamilyRelationshipsInput): Family
  }
`;


// TODO: define queries and mutations


module.exports = typeDefs;