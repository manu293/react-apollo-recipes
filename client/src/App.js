/* eslint-disable import/prefer-default-export */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-undef */
// imports
import React, { Component } from 'react';
import { Query, ApolloConsumer } from 'react-apollo';
import { Link, withRouter } from 'react-router-dom';

// local imports
import { Header } from './components';
import { GET_ALL_RECIPES, SEARCH_RECIPE } from './queries';

class App extends Component {
  searchCategory = async (client, category, history) => {
    const { data } = await client.query({
      query: SEARCH_RECIPE,
      variables: { category },
    });
    const searchTerm = category;
    history.push({
      pathname: '/search/recipe',
      state: [{ searchResult: data }, { searchTerm }],
    });
  };

  renderRecipes = (getAllRecipes, history) => {
    return getAllRecipes.map(recipe => {
      const { _id, name, description, category, createdDate, userName } = recipe;
      const dateObj = new Date(createdDate);
      const day = dateObj.getUTCDate();
      const month = dateObj.getUTCMonth() + 1;
      const year = dateObj.getUTCFullYear();
      return (
        <div className="grid-item pt-3 pb-3" key={_id}>
          <div className="blog-post">
            <div className="post-body">
              <ul className="post-meta">
                <li>
                  <i className="icon-clock" />
                  <span className="navi-link">{`${day} - ${month} - ${year}`}</span>
                </li>
                <li>
                  <i className="icon-user" />
                  <Link to="/profile" className="navi-link">
                    {userName || 'John Doe'}
                  </Link>
                </li>
                <li>
                  <ApolloConsumer>
                    {client => {
                      return (
                        <>
                          <i className="icon-tag" />
                          <span
                            className="navi-link"
                            onClick={() => this.searchCategory(client, category, history)}
                          >
                            {category}
                          </span>
                        </>
                      );
                    }}
                  </ApolloConsumer>
                </li>
              </ul>
              <h3 className="post-title">
                <Link to={`/recipes/${_id}`}>{name}</Link>
              </h3>
              <p>
                {description} <Link to={`/recipes/${_id}`}>Read instructions</Link>
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    const { session, history } = this.props;
    return (
      <div className="App">
        <Header session={session} />
        <Query query={GET_ALL_RECIPES}>
          {/* render props */}
          {(data, loading, error, refetch) => {
            this.refetch = refetch;
            if (loading) return <div>Loading!!!!</div>;
            if (error) return <div>Error</div>;
            if (data.data !== undefined) {
              const { getAllRecipes } = data.data;
              return (
                <div className="container padding-bottom-3x padding-top-3x mb-1">
                  {this.renderRecipes(getAllRecipes, history)}
                </div>
              );
            }
            return null;
          }}
        </Query>
      </div>
    );
  }
}

const cApp = withRouter(App);

export { cApp as App };
