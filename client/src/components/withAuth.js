/* eslint-disable react/jsx-props-no-spreading */
// imports
import React from 'react';
import { Query } from 'react-apollo';
import { Redirect } from 'react-router-dom';

// local imports
import { GET_CURRENT_USER } from '../queries';

const withAuth = conditionFunc => Component => props => (
  <Query query={GET_CURRENT_USER}>
    {(data, loading, error) => {
      if (loading) return <div>Loading</div>;
      if (error) return <div>Error ...</div>;
      console.log('The withAuth data is :', data);
      return conditionFunc(data.data) ? <Component {...props} /> : <Redirect to="/" />;
    }}
  </Query>
);

export default withAuth;
