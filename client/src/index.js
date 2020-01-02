/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
// imports
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// local imports
import App from './App';
import {
  NotFound,
  SignUp,
  SignIn,
  withSession,
  RecipePage,
  AddRecipe,
  SearchPage,
  ProfilePage,
} from './components';
// connecting the front-end to the back-end
const client = new ApolloClient({
  uri: 'http://localhost:4444/graphql',
  fetchOperations: {
    credentials: 'include',
  },
  request: operation => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token,
      },
    });
  },
  onError: ({ networkError }) => {
    if (networkError) {
      console.log('The error is: ', networkError);
    }
  },
});

const Root = ({ refetch, session }) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <App session={session} refetch={refetch} />} />
        <Route path="/signup" exact render={() => <SignUp refetch={refetch} />} />
        <Route path="/signin" exact render={() => <SignIn refetch={refetch} />} />
        <Route path="/recipe/add" exact render={() => <AddRecipe session={session} />} />
        <Route path="/search/recipe" exact component={SearchPage} />
        <Route path="/recipes/:_id" component={RecipePage} />
        <Route path="/profile" render={() => <ProfilePage session={session} />} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

const RootWithSesion = withSession(Root);

ReactDOM.render(
  <ApolloProvider client={client}>
    <RootWithSesion />
  </ApolloProvider>,
  document.getElementById('root')
);
