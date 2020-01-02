/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
// imports
import React from 'react';
import { Query } from 'react-apollo';

// local imports
import { GET_CURRENT_USER } from '../queries';

const withSession = Component => props => (
  <Query query={GET_CURRENT_USER}>
    {({ data, loading, refetch }) => {
      if (loading) return null;
      console.log('The data is : ', data);
      return <Component {...props} refetch={refetch} session={data} />;
    }}
  </Query>
);

export { withSession };
