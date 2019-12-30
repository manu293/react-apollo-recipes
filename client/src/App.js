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
      const { _id, name, description } = recipe;
      return (
        <div className="grid-item" key={_id}>
          <div className="blog-post">
            <div className="post-body">
              <ul className="post-meta">
                <li>
                  <i className="icon-clock" />
                  <a href="#">Mar 15, 2018</a>
                </li>
                <li>
                  <i className="icon-user" />
                  <a href="#">Gregory S.</a>
                </li>
                <li>
                  <i className="icon-tag" />
                  <a href="#">Ecommerce</a>
                </li>
              </ul>
              <h3 className="post-title">
                <a href="blog-single-ns.html">{name}</a>
              </h3>
              <p>
                {description} <Link to={`/recipes/${_id}`}>Read more</Link>
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
          {(data, loading, error) => {
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
