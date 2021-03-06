/* eslint-disable no-unreachable */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
// imports
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ApolloConsumer } from 'react-apollo';

// local imports
import './header.styles.scss';
import '../common.styles.scss';
import { SEARCH_RECIPE } from '../../queries';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  handleSignOut = (client, history) => {
    localStorage.setItem('token', '');
    client.resetStore();
    history.push('/');
  };

  renderHeader = () => {
    const { session, history } = this.props;
    if (session.getCurrentUser !== null) {
      return (
        <>
          <div className="toolbar-item hidden-on-mobile">
            <Link to="/recipe/add">
              <div>
                <i className="icon-bookmark" />
                <span className="text-label">Add Recipe</span>
              </div>
            </Link>
          </div>

          <div className="toolbar-item hidden-on-mobile">
            <Link to="/profile">
              <div>
                <i className="icon-home" />
                <span className="text-label">Profile</span>
              </div>
            </Link>
          </div>

          <div className="toolbar-item hidden-on-mobile">
            <ApolloConsumer>
              {client => {
                return (
                  <Link to="/" onClick={() => this.handleSignOut(client, history)}>
                    <div>
                      {' '}
                      <i className="icon-log-out" />
                      <span className="text-label">LogOut</span>
                    </div>
                  </Link>
                );
              }}
            </ApolloConsumer>
          </div>
        </>
      );
    }
    return (
      <>
        <div className="toolbar-item hidden-on-mobile">
          <Link to="/signup">
            <div>
              <i className="icon-user-plus" />
              <span className="text-label">Sign Up</span>
            </div>
          </Link>
          <div className="toolbar-dropdown text-center px-3">
            <p className="text-xs mb-3 pt-2">
              Sign up to join our online community and to get access to recipies and to post new
              ones.
            </p>
            <Link
              className="btn btn-primary btn-sm btn-block"
              to="/signup"
              style={{ textDecoration: 'none' }}
            >
              Sign Up
            </Link>
            <p className="text-xs text-muted mb-2">
              Existing Customer?&nbsp;
              <Link to="/signin" style={{ textDecoration: 'none' }}>
                Login
              </Link>
            </p>
          </div>
        </div>
        <div className="toolbar-item hidden-on-mobile">
          <Link to="/signin">
            <div>
              <i className="icon-log-in" />
              <span className="text-label">Sign In</span>
            </div>
          </Link>
          <div className="toolbar-dropdown text-center px-3">
            <p className="text-xs mb-3 pt-2">
              Login to bookmark recipies , to like and share the recipies and to do much more.
            </p>
            <Link
              className="btn btn-primary btn-sm btn-block"
              to="/signin"
              style={{ textDecoration: 'none' }}
            >
              LogIn
            </Link>
            <p className="text-xs text-muted mb-2">
              New customer?&nbsp;
              <Link to="/signup" style={{ textDecoration: 'none' }}>
                Register
              </Link>
            </p>
          </div>
        </div>
      </>
    );
  };

  handleSubmit = async (e, client, history) => {
    const { searchTerm } = this.state;
    e.preventDefault();
    const { data } = await client.query({
      query: SEARCH_RECIPE,
      variables: { searchTerm },
    });
    history.push({
      pathname: '/search/recipe',
      state: [{ searchResult: data }, { searchTerm }],
    });
  };

  render() {
    const { searchTerm } = this.state;
    const { history } = this.props;
    return (
      <header className="site-header navbar-sticky">
        <div className="topbar d-flex justify-content-between">
          {/* Logo */}
          <div className="site-branding d-flex">
            <Link className="site-logo align-self-center" to="/">
              <img
                src="/img/recipe_logo.png"
                style={{ width: '130px', height: '50px' }}
                alt="RecipeShop"
              />
            </Link>
          </div>
          {/* Search / Categories */}
          <ApolloConsumer>
            {client => {
              // if (data.data !== undefined) {
              return (
                <div className="search-box-wrap d-flex">
                  <div className="search-box-inner align-self-center">
                    <div className="search-box d-flex">
                      <form
                        className="input-group"
                        onSubmit={e => this.handleSubmit(e, client, history)}
                      >
                        {/* <span className="input-group-btn">
                          <button type="button">
                            <i className="icon-search" />
                          </button>
                        </span> */}
                        <input
                          className="form-control"
                          type="search"
                          name="search"
                          value={searchTerm}
                          placeholder="Search for recipies"
                          onChange={e => this.setState({ searchTerm: e.target.value })}
                        />
                      </form>
                    </div>
                  </div>
                </div>
              );
            }
            // return null;
            }
            {/* } */}
          </ApolloConsumer>

          {/* Toolbar */}
          <div className="toolbar d-flex">{this.renderHeader()}</div>
        </div>
      </header>
    );
  }
}

const cHeader = withRouter(Header);

export { cHeader as Header };
