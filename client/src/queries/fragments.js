/* eslint-disable import/prefer-default-export */
// imports
import { gql } from 'apollo-boost';

// local imports

export const recipeFragments = {
  recipe: gql`
    fragment CompleteRecipe on Recipe {
      _id
      name
      category
      description
      instructions
      createdDate
      likes
      userName
    }
  `,
  likes: gql`
    fragment LikeRecipe on Recipe {
      _id
      likes
    }
  `,
};
