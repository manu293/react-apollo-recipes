/* eslint-disable no-console */
// imports
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const path = require('path');
// bring in the graphql middleware
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

// local imports
require('dotenv').config({ path: 'variables.env' });
const Recipe = require('./models/Recipes');
const User = require('./models/User');
const { resolvers } = require('./resolvers');
const { typeDefs } = require('./schema');

// make executable graphql schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// connecting to the database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('DB Connected'))
  .catch(err => console.log('The error is: ', err));

// running our express application
const app = express();

const corsOptions = {
  origin: 'https://gentle-hollows-45761.herokuapp.com',
  credentials: true,
};
app.use(cors(corsOptions));

// set up JWT authentication middleware
app.use(async (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      const currentUser = await jwt.verify(token, process.env.SECRET);
      req.currentUser = currentUser;
    } catch (err) {
      console.log(err);
    }
  }
  next();
});

// setting up graphiql application
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// connect schema to graphql
app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress(({ currentUser }) => ({
    introspection: true,
    playground: true,
    schema,
    context: {
      Recipe,
      User,
      currentUser,
    },
  }))
);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// using environmental vairable port or the default port
const { PORT } = process.env;
// const PORT = process.env.PORT || 4444;

// listening to port changes
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
