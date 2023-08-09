const typeDefs = `
    type Family {
      _id: ID
      familyName: String!
      familyPasscode: String!
      parentJoinCode: String
      childJoinCode: String
      familyParent: [Parent]
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
      parentFamily: Family!
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
    choreDueDate: [String]
    choreCompletedDate: [String]
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
  }

  type Consequence {
    _id: ID
    consTitle: String!
    consText: String
    consCount: Int
    consCost: Int
  }

  input FamilyInput {
    familyName: String!
    familyPasscode: String!
    familyParent: [ID]
    familyChild: [ID]
    familyChore: [ID]
    familyReward: [ID]
    familyCons: [ID]
    }

  input ParentInput{
    parentUsername: String!
    parentEmail: String!
    parentPhone: String
    parentPassword: String!
    parentFamily: ID
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
    choreDueDate: [String]
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
  }

  input ConsequenceInput {
    consTitle: String!
    consText: String
    consCount: Int
    consCost: Int
  }

  type Query {
    families: [Family]
    family(familyId: ID!): Family
    parents(familyId: ID!): [Parent]
    oneParent(parentId: ID!): Parent
    childs(familyId: ID!): [Child]
    oneChild(childId: ID!): Child
    chores(familyId: ID!): [Chore]
    oneChore(choreId: ID!): Chore
    rewards(familyId: ID!): [Reward]
    oneReward(rewardId: ID!): Reward
    consequences(familyId: ID!): [Consequence]
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