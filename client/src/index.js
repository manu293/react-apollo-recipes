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
import { signUp, signIn } from './components/Auth';
import { NotFound } from './components/NotFound';
// connecting the front-end to the back-end
const client = new ApolloClient({
  uri: 'http://localhost:4444/graphql',
});

const Root = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/signup" exact component={signUp} />
      <Route path="/signin" exact component={signIn} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.getElementById('root')
);
