/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
// imports
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// local imports
import App from './App';
import { NotFound, SignUp, SignIn, withSession } from './components';
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

const Root = ({ refetch }) => (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/signup" exact render={() => <SignUp refetch={refetch} />} />
      <Route path="/signin" exact render={() => <SignIn refetch={refetch} />} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

const RootWithSesion = withSession(Root);

ReactDOM.render(
  <ApolloProvider client={client}>
    <RootWithSesion />
  </ApolloProvider>,
  document.getElementById('root')
);
