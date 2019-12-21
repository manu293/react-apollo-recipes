/* eslint-disable import/prefer-default-export */
import { gql } from 'apollo-boost';

export const GET_ALL_RECIPES = gql`
  query {
    getAllRecipes {
      _id
      name
      description
    }
  }
`;
