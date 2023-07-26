//TODO:
import { gql } from '@apollo/client';

export const ADD_PARENT = gql`
    mutation addParent($parentUsername: String, $parentEmail: String!, $parentPhone: String){
        addParent(parentUsername: $parentUsername, parentEmail: $parentEmail, parentPhone: $parentPhone){
            parentUsername
            parentEmail
            parentPhone
            _id
        }
    }
`;