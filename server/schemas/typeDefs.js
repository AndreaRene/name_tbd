const typeDefs = `

    type Parent {
      _id: ID
      parentUsername: String!
      parentEmail: String!
      parentPhone: String
      parentPassword: String!
      parentPin: Int!
      parentChild: [Child]
      parentCoParent: [Parent]
      parentCode: String
    }

    type Child{
      _id: ID
      childUsername: String!
      childParent: [Parent]!
      childSibling: [Child]
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
    choreDueTime: [String]
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
    rewardExpyDate: String
  }

  type Consequence {
    _id: ID
    consTitle: String!
    consText: String
    ConsCount: Int
    consCost: Int
    consIsSpent: Boolean
  }

  input ParentInput{
    parentUsername: String!
      parentEmail: String!
      parentPhone: String
      parentPassword: String!
      parentPin: Int!
      parentCode: String
      parentChild: [ID]
      parentCoParent: [ID]
  }

  input ChildInput{
    childUsername: String!
  }

  input ChoreInput {
    choreTitle: String!
    choreText: String
    choreIsMultiple: Boolean
    choreDueDate: [String]
    choreDueTime: [String]
    choreReward: [String]
    chorePoints: Int
    choreCons: [String]
  }

  input RewardInput {
    rewardTitle: String!
    rewardText: String
    rewardCost: Int
    rewardExpyDate: String
  }

  input ConsequenceInput {
    consTitle: String!
    consText: String
    consCost: Int
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
  }`;


// TODO: define queries and mutations


module.exports = typeDefs;