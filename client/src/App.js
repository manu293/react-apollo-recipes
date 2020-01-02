/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-undef */
// imports
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

// local imports
import { Header } from './components';
import { GET_ALL_RECIPES } from './queries';

class App extends Component {
  renderRecipes = getAllRecipes => {
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
                  <a href="#">{`${day} - ${month} - ${year}`}</a>
                </li>
                <li>
                  <i className="icon-user" />
                  <a href="#">{userName || 'John Doe'}</a>
                </li>
                <li>
                  <i className="icon-tag" />
                  <a href="#">{category}</a>
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
    const { session } = this.props;
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
                  {this.renderRecipes(getAllRecipes)}
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

export default App;
