const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const createToken = (user, secret, expiresIn) => {
  const { userName, email } = user;
  return jwt.sign({ userName, email }, secret, { expiresIn });
};

exports.resolvers = {
  Query: {
    getAllRecipes: async (root, args, { Recipe }) => {
      const allRecipes = await Recipe.find();
      return allRecipes;
    },

    getCurrentUser: async (root, args, { currentUser, User }) => {
      if (!currentUser) {
        return null;
      }
      const user = await User.findOne({ userName: currentUser.userName }).populate({
        path: 'favorites',
        model: 'Recipe',
      });
      return user;
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
    signUpUser: async (root, { userName, email, password }, { User }) => {
      const user = await User.findOne({ userName });

      if (user) {
        throw new Error('The user already exists');
      }

      const newUser = await new User({
        userName,
        email,
        password,
      }).save();
      return { token: createToken(newUser, process.env.SECRET, '1hr') };
    },
    signInUser: async (root, { userName, password }, { User }) => {
      const user = await User.findOne({ userName });

      if (!user) {
        throw new Error('The user does not exist');
      }

      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        throw new Error('Invilid Password');
      }
      return { token: createToken(user, process.env.SECRET, '1hr') };
    },
  },
};
