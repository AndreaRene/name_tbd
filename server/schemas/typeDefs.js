const typeDefs = `

    type Parent {
      parentUsername: String!
      parentEmail: String!
      parentPhone: Int
      parentPassword: String!
      parentPin: Int!
      parentChild: [Child]
      parentCoParent: [Parent]
      parentCode: String!
    }

    type Child{
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
    choreReward: Reward
    chorePoints: Int
    choreCons: Consequence
  }

  type Reward {
    rewardTitle: String!
    rewardText: String
    rewardCost: Int
    rewardCount: Int
    rewardMaxCount: Int
    rewardIsSpent: Boolean
    rewardExpyDate: String
  }

  type Consequence {
    consTitle: String!
    consText: String
    ConsCount: Int
    consCost: Int
    consIsSpent: Boolean
  }

  input ParentInput{
    parentUsername: String!
      parentEmail: String!
      parentPhone: Int
      parentPassword: String!
      parentPin: Int!
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
    choreReward: Reward
    chorePoints: Int
    choreCons: Consequence
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
  }`;

module.exports = typeDefs;