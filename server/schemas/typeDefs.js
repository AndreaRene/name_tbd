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
      familyId: String
    }

    type Child{
      _id: ID
      childUsername: String!
      familyId: String
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
    rewards: [Reward]
    chorePoints: Int
    consequences: [Consequence]
  }

  type Reward {
    _id: ID
    rewardTitle: String!
    rewardText: String
    rewardCost: Int
    rewardCount: Int
    rewardMaxCount: Int
  }

  type Consequence {
    _id: ID
    consTitle: String!
    consText: String
    consCount: Int
    consCost: Int
  }

  input FamilyInput {
    familyName: String
    familyPasscode: String
    parents: [ID]
    }

  input ParentInput{
    parentUsername: String
    parentEmail: String!
    parentPhone: String
    parentPassword: String!
    familyId: String
  }

  input ChildInput{
      childUsername: String!
      familyId: String
  }

  input ChoreInput {
    choreTitle: String!
    choreText: String
    choreDueDate: String
    rewards: [ID]
    chorePoints: Int
    consequences: [ID]
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
    parents: [ParentInput]
    children: [ChildInput]
    chores: [ChoreInput]
    rewards: [RewardInput]
    consequences: [ConsequenceInput]
    }

  input UpdateParentInput {
    parentUsername: String
    parentPhone: String
    parentPassword: String!
    familyId: String
  }

  input UpdateChildInput {
    childUsername: String!
    chores: [ChoreInput]
    rewards: [RewardInput]
    consequences: [ConsequenceInput]
  }

  input UpdateChoreInput {
    choreTitle: String!
    choreText: String
    choreDueDate: String
    rewards: [RewardInput]
    chorePoints: Int
    consequences: [ConsequenceInput]
  }

  input UpdateRewardInput {
    rewardTitle: String!
    rewardText: String
    rewardCost: Int
    rewardCount: Int
    rewardMaxCount: Int
  }

  input UpdateConsequenceInput {
    consTitle: String!
    consText: String
    consCount: Int
    consCost: Int
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
    updateReward(rewardId: ID!, input: UpdateRewardInput): Reward
  }
`;


// TODO: define queries and mutations


module.exports = typeDefs;