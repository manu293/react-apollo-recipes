/* eslint-disable no-undef */
// imports
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// local imports
import App from './App';

// connecting the front-end to the back-end
const client = new ApolloClient({
  uri: 'http://localhost:4444/graphql',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
