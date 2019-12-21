exports.resolvers = {
  Query: {
    getAllRecipes: async (root, args, { Recipe }) => {
      const allRecipes = await Recipe.find();
      return allRecipes;
    },
  },
  Mutation: {
    addRecipe: async (
      root,
      { name, description, category, instructions, userName },
      { Recipe }
    ) => {
      const newRecipe = await new Recipe({
        name,
        description,
        category,
        instructions,
        userName,
      }).save();
      return newRecipe;
    },
  },
};
