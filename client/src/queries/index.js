/* eslint-disable import/prefer-default-export */
import { gql } from 'apollo-boost';

// Search Recipe query
export const SEARCH_RECIPE = gql`
  query($searchTerm: String) {
    searchRecipes(searchTerm: $searchTerm) {
      _id
      name
      description
      category
    }
  }
`;

// Recipies queries
export const GET_ALL_RECIPES = gql`
  query {
    getAllRecipes {
      _id
      name
      description
      category
      createdDate
      userName
    }
  }
`;

export const GET_RECIPE = gql`
  query($_id: ID!) {
    getRecipe(_id: $_id) {
      _id
      name
      category
      description
      instructions
      createdDate
      likes
      userName
    }
  }
`;

// Recipies mutation
export const ADD_RECIPE = gql`
  mutation(
    $name: String!
    $category: String!
    $description: String!
    $instructions: String!
    $userName: String
  ) {
    addRecipe(
      name: $name
      category: $category
      description: $description
      instructions: $instructions
      userName: $userName
    ) {
      _id
      name
      category
      description
      instructions
      userName
    }
  }
`;

export const DELETE_USER_RECIPE = gql`
  mutation($_id: ID) {
    deleteUserRecipe(_id: $_id) {
      _id
    }
  }
`;

// User queries
export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      userName
      joinDate
      email
      favorites {
        _id
        name
        description
        category
      }
    }
  }
`;

export const GET_USER_RECIPES = gql`
  query($userName: String!) {
    getUserRecipes(userName: $userName) {
      _id
      name
      description
      category
      createdDate
      userName
    }
  }
`;

// User mutation
export const SIGNUP_USER = gql`
  mutation($userName: String!, $email: String!, $password: String!) {
    signUpUser(userName: $userName, email: $email, password: $password) {
      token
    }
  }
`;

export const SIGNIN_USER = gql`
  mutation($userName: String!, $password: String!) {
    signInUser(userName: $userName, password: $password) {
      token
    }
  }
`;
