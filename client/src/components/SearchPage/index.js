/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
// import
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// local import
import { PageTitle } from '../PageTitle';

class SearchPage extends Component {
  renderSearch = searchResult => {
    const { searchRecipes } = searchResult;
    if (searchRecipes.length === 0) {
      return <img src="/img/noSearch.png" alt="No Search Result" />;
    }
    return (
      <>
        {searchRecipes.map((recipe, i) => {
          const { category, _id, description, name } = recipe;
          return (
            <div
              className={i % 2 === 0 ? 'card mb-4 mt-4' : 'card  bg-secondary mb-4 mt-4'}
              key={_id}
            >
              <div className="card-body">
                <span className="badge badge-warning">{category}</span>
                <div className="pt-3">
                  <h6>
                    <Link className="navi-link text-gray-dark" to={`/recipes/${_id}`}>
                      {name}
                    </Link>
                  </h6>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  render() {
    console.log('this.props.location : ', this.props.location);
    const { searchResult } = this.props.location.state[0];
    const { searchTerm } = this.props.location.state[1];
    return (
      <>
        <PageTitle title={`Search Result for: ${searchTerm}`} bcrumbs={searchTerm} />
        <div className="container padding-bottom-3x mb-2">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-8">{this.renderSearch(searchResult)}</div>
          </div>
        </div>
      </>
    );
  }
}

export { SearchPage };
