const typeDefs = `
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
    choreCons: Consequence
  }

  type Reward {
    rewardTitle: String!
    rewardText: String
    rewardCount: Int
  }

  type Consequence {
    consTitle: String!
  }

  type Query {
    chores: [Chore]
    oneChore(choreId: ID!): Chore
  }`;

module.exports = typeDefs;