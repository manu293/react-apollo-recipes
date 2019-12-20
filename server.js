// imports
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
// bring in the graphql middleware
const {graphiqlExpress, graphqlExpress} = require('apollo-server-express');
const {makeExecutableSchema} = require('graphql-tools');

// local imports
require('dotenv').config({path: 'variables.env'});
const Recipe = require('./models/Recipes');
const User = require('./models/User');
const {resolvers} = require('./resolvers');
const {typeDefs} = require('./schema');

// make executable graphql schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

// connecting to the database
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('DB Connected'))
.catch(err => console.log("The error is: ", err))

// running our express application
const app = express();

// setting up graphiql application
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}))

// connect schema to graphql
app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema,
    context: {
        Recipe,
        User
    }
}))

// using environmental vairable port or the default port 
const PORT = process.env.PORT || 4444;

// listening to port changes
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})