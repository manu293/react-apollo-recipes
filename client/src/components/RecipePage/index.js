/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prefer-stateless-function */
// imports
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

// local imports
import { PageTitle } from '../PageTitle';
import { GET_RECIPE } from '../../queries';

class RecipePage extends Component {
  render() {
    const { _id } = this.props.match.params;
    return (
      <>
        <PageTitle title="Your recipe is ready" bcrumbs="Recipe Page" />
        <Query query={GET_RECIPE} variables={{ _id }}>
          {(data, loading, error) => {
            if (loading) return <div>Loading</div>;
            if (error) return <div>Error</div>;
            if (data.data !== undefined) {
              const { getRecipe } = data.data;
              const {
                category,
                createdDate,
                description,
                instructions,
                likes,
                name,
                userName,
              } = getRecipe;
              const dateObj = new Date(createdDate);
              const day = dateObj.getUTCDate();
              const month = dateObj.getUTCMonth() + 1;
              const year = dateObj.getUTCFullYear();
              return (
                <div className="container padding-bottom-3x mb-2">
                  <div className="row justify-content-center">
                    {/* Content */}
                    <div className="col-xl-9 col-lg-8 order-lg-2">
                      {/* Post Meta */}
                      <ul className="post-meta mb-4">
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
                          <i className="icon-tag" />
                          <span className="navi-link">{category}</span>
                        </li>
                        <li>
                          <i className="icon-heart" />
                          <span className="navi-link">{likes}</span>
                        </li>
                      </ul>
                      {/* Gallery */}
                      <h2 className="pt-4">{name}</h2>
                      <p className="pt-3">{description}</p>
                      <div className="row pt-3 pb-2">
                        <div className="col-xl-10 offset-xl-1">
                          <blockquote className="margin-top-1x margin-bottom-1x">
                            <i className="icon-bell"> Instructions </i>
                            <p className="pt-4">{instructions}</p>
                          </blockquote>
                        </div>
                      </div>
                      <div className="d-flex flex-wrap justify-content-between align-items-center pt-3 pb-4">
                        <div className="pb-2">
                          <span className="text-sm text-muted navi-link">{`#${category}`}</span>
                        </div>
                        <div className="pb-2">
                          <span className="d-inline-block align-middle text-sm text-muted">
                            Like post:&nbsp;&nbsp;&nbsp;
                          </span>
                          <a
                            className="social-button shape-rounded"
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Like this post"
                          >
                            <i className="icon-heart" />
                          </a>
                        </div>
                      </div>
                      <div className="entry-navigation">
                        <div className="column text-left">
                          <a className="btn btn-outline-secondary btn-sm" href="#">
                            <i className="icon-arrow-left" />
                            &nbsp;Prev
                          </a>
                        </div>
                        <div className="column">
                          <Link
                            className="btn btn-outline-secondary view-all"
                            to="/"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="All posts"
                          >
                            <i className="icon-menu" />
                          </Link>
                        </div>
                        <div className="column text-right">
                          <a className="btn btn-outline-secondary btn-sm" href="#">
                            Next&nbsp;
                            <i className="icon-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          }}
        </Query>
      </>
    );
  }
}

export { RecipePage };
