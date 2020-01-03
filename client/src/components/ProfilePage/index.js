/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prefer-stateless-function */
// imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query, Mutation } from 'react-apollo';

// local imports
import { PageTitle } from '../PageTitle';
import {
  GET_USER_RECIPES,
  DELETE_USER_RECIPE,
  GET_CURRENT_USER,
  GET_ALL_RECIPES,
} from '../../queries';
import withAuth from '../withAuth';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderTabs: 'profile',
    };
  }

  renderFavorites = favorites => {
    if (favorites.length === 0) {
      return (
        <div className="text-center">
          <h2>No Favorite Recipe Found</h2>
          <p className="pt-4">
            It seems we can’t find any of your favorite recipes.{' '}
            <Link to="/">Go back to Homepage</Link>
            <br />
            To add some of the recipes to your favorites
          </p>
        </div>
      );
    }
    return favorites.map((item, i) => {
      const { _id, name, description, category } = item;
      return (
        <div className={`card mb-4 ${i % 2 === 0 ? ' bg-secondary' : ''}`} key={_id}>
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
    });
  };

  handleDelete = deleteUserRecipe => {
    const confirmDelete = window.confirm('Are you sure you want to delete the recipe ? ');
    if (confirmDelete) {
      deleteUserRecipe();
    }
  };

  renderUserRecipeItems = getUserRecipes => {
    return getUserRecipes.map((recipe, i) => {
      const { _id, name, description, category, userName } = recipe;
      return (
        <div className={`card  mb-4 ${i % 2 === 0 ? ' bg-secondary' : ''}`} key={_id}>
          <div className="card-body">
            <span className="badge badge-primary">{category}</span>
            <Mutation
              mutation={DELETE_USER_RECIPE}
              variables={{ _id }}
              refetchQueries={[
                { query: GET_USER_RECIPES, variables: { userName } },
                { query: GET_CURRENT_USER },
                { query: GET_ALL_RECIPES },
              ]}
            >
              {(deleteUserRecipe, attrs = {}) => {
                return (
                  <span
                    className="badge badge-danger"
                    onClick={() => this.handleDelete(deleteUserRecipe)}
                    style={{ float: 'right', cursor: 'pointer' }}
                  >
                    {attrs.loading ? (
                      <div
                        className="spinner-border spinner-border-sm text-white mr-2"
                        role="status"
                      />
                    ) : (
                      'Delete Post'
                    )}
                  </span>
                );
              }}
            </Mutation>
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
    });
  };

  renderUserRecipe = userName => {
    return (
      <Query query={GET_USER_RECIPES} variables={{ userName }}>
        {({ data, loading, error }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error....</div>;
          if (data.getUserRecipes.length === 0) {
            return (
              <div className="text-center">
                <h2>You have not added any recipes yet!</h2>
                <p className="pt-4">
                  Just take some time to add your favorite recipe and share it with millions
                  worldwide. <Link to="/recipe/add">Go back to Homepage</Link>
                </p>
              </div>
            );
          }
          return this.renderUserRecipeItems(data.getUserRecipes);
        }}
      </Query>
    );
  };

  render() {
    const { getCurrentUser } = this.props.session;
    const { renderTabs } = this.state;
    const { email, favorites, joinDate, userName } = getCurrentUser;
    const dateObj = new Date(joinDate);
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const monthName = monthNames[dateObj.getMonth()];
    const name = userName.split(' ');
    const firstName = name[0];
    const lastName1 = name[1];
    const lastName = lastName1 || 'Doe';
    return (
      <>
        <PageTitle title={`Profile page for: ${firstName} ${lastName}`} bcrumbs="My Profile" />
        <div className="container padding-bottom-3x mb-2">
          <div className="row">
            <div className="col-lg-4">
              <aside className="user-info-wrapper">
                <div
                  className="user-cover"
                  style={{ backgroundImage: 'url(img/account/user-cover-img.jpg)' }}
                >
                  <div
                    className="info-label"
                    data-toggle="tooltip"
                    title="You currently have 290 Reward Points to spend"
                  >
                    <i className="icon-award" />
                    Prime Recipe Member
                  </div>
                </div>
                <div className="user-info">
                  <div className="user-avatar">
                    <span className="edit-avatar" />
                    <img src="/img/profilePic.png" alt="User" />
                  </div>
                  <div className="user-data">
                    <h4 className="h5">{`${firstName} ${lastName}`}</h4>
                    <span>{`Joined ${monthName} ${day}, ${year}`}</span>
                  </div>
                </div>
              </aside>
              <nav className="list-group">
                <span
                  className={`list-group-item arrow  ${renderTabs === 'profile' ? 'active' : ''}`}
                  onClick={() => {
                    this.setState({ renderTabs: 'profile' });
                  }}
                >
                  <i className="icon-user" />
                  Profile
                </span>
                <span
                  className={`list-group-item with-badge arrow ${
                    renderTabs === 'favorites' ? 'active' : ''
                  }`}
                  onClick={() => {
                    this.setState({ renderTabs: 'favorites' });
                  }}
                >
                  <i className="icon-heart" />
                  Favorites
                  <span className="badge badge-default badge-pill">{favorites.length}</span>
                </span>
                <span
                  className={`list-group-item with-badge arrow ${
                    renderTabs === 'userRecipe' ? 'active' : ''
                  }`}
                  onClick={() => {
                    this.setState({ renderTabs: 'userRecipe' });
                  }}
                >
                  <i className="icon-tag" />
                  Your Recipes
                </span>
              </nav>
            </div>
            <div className={`col-lg-8 ${renderTabs === 'profile' ? ' show' : ' hidden'}`}>
              <div className="padding-top-2x mt-2 hidden-lg-up" />
              <form className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="account-fn">First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      id="account-fn"
                      defaultValue={firstName}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="account-ln">Last Name</label>
                    <input
                      className="form-control"
                      type="text"
                      id="account-ln"
                      defaultValue={lastName}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="account-email">E-mail Address</label>
                    <input
                      className="form-control"
                      type="email"
                      id="account-email"
                      defaultValue={email}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="account-phone">Phone Number</label>
                    <input
                      className="form-control"
                      type="text"
                      id="account-phone"
                      defaultValue="+7 (805) 348 95 72"
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <hr className="mt-2 mb-3" />
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="custom-control custom-checkbox d-block">
                      <input
                        className="custom-control-input"
                        type="checkbox"
                        id="subscribe_me"
                        defaultChecked
                        disabled
                      />
                      <label className="custom-control-label" htmlFor="subscribe_me">
                        Subscribed to new recipe newsletter
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className={`col-lg-8 ${renderTabs === 'favorites' ? ' show' : ' hidden'}`}>
              {this.renderFavorites(favorites)}
            </div>
            <div className={`col-lg-8 ${renderTabs === 'userRecipe' ? ' show' : ' hidden'}`}>
              {this.renderUserRecipe(userName)}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const cProfilePage = withAuth(session => session && session.getCurrentUser)(ProfilePage);

export { cProfilePage as ProfilePage };
