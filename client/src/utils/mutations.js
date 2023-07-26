//TODO:
import { gql } from '@apollo/client';

export const ADD_PARENT = gql`
    mutation addParent($parentUsername: String!, parentEmail: String!, parentPhone: Int){
        addParent(parentUsername: $parentUsername, parentEmail: $$parentEmail, parentPhone: $parentPhone){
            _id
            parentUsername
            parentEmail
            parentPhone
        }
    }
`;