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
    family: Family
    choreTitle: String!
    choreText: String
    recurring: Boolean
    recurringFrequency: String
    recurringStartDate: String
    recurringEndDate: String
    children: [ChildChoreAssociation]
  }

  Type ChildChoreAssociation {
    child: Child
    reward: Reward
    consequence: Consequence
    choreDueDate: String
    choreCompletedDate: [String]
    chorePoints: Int
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
    family: ID
  }

input ChildInput {
  childUsername: String!
  family: ID
}

input ChoreInput {
  choreTitle: String!
  choreText: String
  recurring: Boolean
  recurringFrequency: String
  recurringStartDate: String
  recurringEndDate: String
  childAssociations: [ChildChoreAssociationInput]
  family: ID
}

input ChildChoreAssociationInput {
  child: ID
  reward: ID
  consequence: ID
  choreDueDate: String
  chorePoints: Int
}

  input RewardInput {
    rewardTitle: String!
    rewardText: String
    rewardCost: Int
    rewardCount: Int
    rewardMaxCount: Int
    family: ID
  }

  input ConsequenceInput {
    consTitle: String!
    consText: String
    consCount: Int
    consCost: Int
    family: ID
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

  input UpdateChildInput {
  childUsername: String!
}

input UpdateChoreInput {
  choreTitle: String!
  choreText: String
  recurring: Boolean
  recurringFrequency: String
  recurringStartDate: String
  recurringEndDate: String
}

input UpdateChoreRelationshipsInput {
  children: [UpdateChildChoreAssociationInput]
}

input UpdateChildChoreAssociationInput {
  child: ID
  reward: ID
  consequence: ID
  choreDueDate: String
  chorePoints: Int
}

input UpdateChoreCompletedDateInput{
  choreCompletedDate: [String]
}

input UpdateChoreRelationshipsInput {
  children: [UpdateChildChoreAssociationInput]
  rewards: [ID]
  consequences: [ID]
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
  updateChore(choreId: ID!, input: UpdateChoreInput): Chore
  updateReward(rewardId: ID!, input: UpdateRewardInput): Reward
  updateConsequence(consId: ID!, input: UpdateConsequenceInput): Consequence
  updateFamilyRelationships(familyId: ID!, input: UpdateFamilyRelationshipsInput): Family
  updateChildRelationships(childId: ID!, input: UpdateChildRelationshipsInput): Child
  updateChoreRelationships(choreId: ID!, input: UpdateChoreRelationshipsInput): Chore
}
  
`;


// TODO: define queries and mutations


module.exports = typeDefs;