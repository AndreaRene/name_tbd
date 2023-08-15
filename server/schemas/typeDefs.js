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
      familyId: Family
      chores: [Chore]
      rewards: [Reward]
      consequences: [Consequence]
    }

    type Chore {
    _id: ID
    choreTitle: String!
    choreText: String
    choreDueDate: [String]
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
    children: [ID]
    chores: [ID]
    rewards: [ID]
    consequences: [ID]
    }

  input ParentInput{
    parentUsername: String
    parentEmail: String!
    parentPhone: String
    parentPassword: String!
  }

  input ChildInput{
      childUsername: String!
      chores: [ID]
      rewards: [ID]
      consequences: [ID]
  }

  input ChoreInput {
    choreTitle: String!
    choreText: String
    choreDueDate: [String]
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

  type Query {
    allFamilies: [Family]
    oneFamily(familyId: ID!): Family
    allParents: [Parent]
    oneParent(parentId: ID!): Parent
    allChildren: [Child]
    oneChild(childId: ID!): Child
    allChores: [Chore]
    oneChore(choreId: ID!): Chore
    oneReward(rewardId: ID!): Reward
    oneConsequence(consId: ID!): Consequence
  }

  type Mutation {
    createFamily(input: FamilyInput!): Family
    createParent(input: ParentInput!): Parent
    createChild(input: ChildInput): Child
    createChore(input: ChoreInput): Chore
    createReward(input: RewardInput): Reward
    createConsequence(input: ConsequenceInput): Consequence
  }
`;


// TODO: define queries and mutations


module.exports = typeDefs;