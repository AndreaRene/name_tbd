const typeDefs = `
    type Family {
      _id: ID
      familyName: String!
      familyPasscode: String!
      familyParent: [Parent]!
      familyChild: [Child]
      familyChore: [Chore]
      familyReward: [Reward]
      familyCons: [Consequence]
    }
    
    type Parent {
      _id: ID
      parentUsername: String!
      parentEmail: String!
      parentPhone: String
      parentPassword: String!
      parentPin: Int!
      parentCode: String
      parentFamily: Family
    }

    type Child{
      _id: ID
      childUsername: String!
      childFamily: Family
      childChore: [Chore]
      childReward: [Reward]
      childCons: [Consequence]
    }

    type Chore {
    _id: ID
    choreTitle: String!
    choreText: String
    choreIsMultiple: Boolean
    choreDueDate: [String]
    choreDueTime: String
    choreAmount: Int
    choreIsComplete: Boolean
    choreCompleteDates: [String]
    choreReward: [Reward]
    chorePoints: Int
    choreCons: [Consequence]
  }

  type Reward {
    _id: ID
    rewardTitle: String!
    rewardText: String
    rewardCost: Int
    rewardCount: Int
    rewardMaxCount: Int
    rewardIsSpent: Boolean
    rewardExpiryDate: String
  }

  type Consequence {
    _id: ID
    consTitle: String!
    consText: String
    ConsCount: Int
    consCost: Int
    consIsSpent: Boolean
  }

  input FamilyInput {
    familyName: String!
    familyPasscode: String!
    familyParent: [ID]!
    familyChild: [ID]
    familyChore: [ID]
    familyReward: [ID]
    familyCons: [ID]
    }
  }

  input ParentInput{
    parentUsername: String!
    parentEmail: String!
    parentPhone: String
    parentPassword: String!
    parentPin: Int!
    parentCode: String
  }

  input ChildInput{
      childUsername: String!
      childChore: [ID]
      childReward: [ID]
      childCons: [ID]
  }

  input ChoreInput {
    choreTitle: String!
    choreText: String
    choreIsMultiple: Boolean
    choreDueDate: [String]
    choreDueTime: [String]
    choreReward: [ID]
    chorePoints: Int
    choreCons: [ID]
  }

  input RewardInput {
    rewardTitle: String!
    rewardText: String
    rewardCost: Int
    rewardCount: Int
    rewardMaxCount: Int
    rewardIsSpent: Boolean
    rewardExpiryDate: String
  }

  input ConsequenceInput {
    consTitle: String!
    consText: String
    consCount: Int
    consCost: Int
    consIsSpent: Boolean
  }

  type Query {
    chores: [Chore]
    oneChore(choreId: ID!): Chore
    parents: [Parent]
    oneParent(parentId: ID!): Parent
    childs: [Child]
    oneChild(childId: ID!): Child
    rewards: [Reward]
    oneReward(rewardId: ID!): Reward
    consequences: [Consequence]
    oneConsequence(consId: ID!): Consequence
  }
  
  type Mutation {
    createParent(input: ParentInput!): Parent!
    createChild(input: ChildInput!): Child!
    createReward(input: RewardInput!): Reward!
    createConsequence(input: ConsequenceInput!): Consequence!    
  }`;


// TODO: define queries and mutations


module.exports = typeDefs;