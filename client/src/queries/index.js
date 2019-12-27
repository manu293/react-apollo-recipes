/* eslint-disable import/prefer-default-export */
import { gql } from 'apollo-boost';

// Recipies queries
export const GET_ALL_RECIPES = gql`
  query {
    getAllRecipes {
      _id
      name
      description
    }
  }
`;

// Recipies mutation

// User queries

// User mutation
export const SIGNUP_USER = gql`
  mutation($userName: String!, $email: String!, $password: String!) {
    signUpUser(userName: $userName, email: $email, password: $password) {
      token
    }
  }
`;
