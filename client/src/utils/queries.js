import { gql } from '@apollo/client';
//TODO:
export const QUERY_CHORES = gql`
query getChores {
    chores{
      _id
      choreTitle
      choreText
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