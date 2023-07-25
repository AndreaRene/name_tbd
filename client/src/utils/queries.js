import { gql } from '@apollo/client';
//TODO:


export const QUERY_SINGLE_CHILD = gql`
  query getSingleChild($childId: ID!) {
    child(childId: $childId){
      _id
      childUsername
    }
  }
`;

export const QUERY_CHORES = gql`
query getChores {
    chores{
      _id
      choreTitle
    }
  }
`;

export const QUERY_SINGLE_CHORE = gql`
  query getSingleChore($choreId: ID!) {
    chore(choreId: $choreId){
      _id
      choreTitle
      choreText
    }
  }
`;

export const QUERY_REWARDS = gql`
query getRewards {
    rewards{
      _id
      rewardTitle      
    }
  }
`;

export const QUERY_SINGLE_REWARD = gql`
  query getSingleReward($rewardId: ID!) {
    reward(rewardId: $rewardId){
      _id
      rewardTitle
      rewardText
    }
  }
`;
export const QUERY_CONSEQUENCES = gql`
query getConsequences {
    consequences{
      _id
      consTitle    
    }
  }
`;

export const QUERY_SINGLE_CONSEQUENCE = gql`
  query getSingleConsequence($consId: ID!) {
    consequence(consId: $consId){
      _id
      consTitle
      consText
    }
  }
`;