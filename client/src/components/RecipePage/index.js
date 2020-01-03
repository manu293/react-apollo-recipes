/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prefer-stateless-function */
// imports
import React, { Component } from 'react';
import { Query, Mutation } from 'react-apollo';
import { Link, withRouter } from 'react-router-dom';

// local imports
import { PageTitle } from '../PageTitle';
import {
  GET_RECIPE,
  LIKE_RECIPE,
  GET_ALL_RECIPES,
  UNLIKE_RECIPE,
  GET_USER_RECIPES,
  GET_CURRENT_USER,
} from '../../queries';

class RecipePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curUser: '',
      liked: false,
    };
  }

  componentDidMount() {
    if (this.props.session.getCurrentUser) {
      const { userName, favorites } = this.props.session.getCurrentUser;
      const { _id } = this.props.match.params;
      const prevLiked = favorites.findIndex(favorite => favorite._id === _id) > -1;
      this.setState({ curUser: userName, liked: prevLiked });
    }
  }

  handleClick = (likeRecipe, unlikeRecipe) => {
    this.setState(
      prevState => ({
        liked: !prevState.liked,
      }),
      () => this.handleLikes(likeRecipe, unlikeRecipe)
    );
  };

  handleLikes = (likeRecipe, unlikeRecipe) => {
    if (this.state.liked) {
      likeRecipe().then(({ data }) => {
        // await this.props.refetch();
        console.log('The like Recipe data : ', data, ' : ', this.props);
      });
    } else {
      unlikeRecipe().then(({ data }) => {
        // await this.props.refetch();
        console.log('The unlike recipe data is : ', data, ' : ', this.props);
      });
    }
  };

  render() {
    const { curUser, liked } = this.state;
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
              console.log('The userName is: ', userName);
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
                        {curUser ? (
                          <div className="pb-2">
                            <span className="d-inline-block align-middle text-sm text-muted">
                              Like post:&nbsp;&nbsp;&nbsp;
                            </span>
                            <Mutation
                              mutation={UNLIKE_RECIPE}
                              variables={{ _id, userName: curUser }}
                              refetchQueries={[
                                { query: GET_ALL_RECIPES },
                                { query: GET_CURRENT_USER },
                                { query: GET_USER_RECIPES, variables: { userName: curUser } },
                              ]}
                            >
                              {unlikeRecipe => {
                                return (
                                  <Mutation
                                    mutation={LIKE_RECIPE}
                                    variables={{ _id, userName: curUser }}
                                    refetchQueries={[
                                      { query: GET_ALL_RECIPES },
                                      { query: GET_CURRENT_USER },
                                      { query: GET_USER_RECIPES, variables: { userName: curUser } },
                                    ]}
                                  >
                                    {likeRecipe => {
                                      return (
                                        <span
                                          className="social-button shape-rounded"
                                          style={
                                            liked
                                              ? { cursor: 'pointer', color: '#0055ff' }
                                              : { cursor: 'pointer' }
                                          }
                                          data-toggle="tooltip"
                                          data-placement="top"
                                          title="Like this post"
                                          onClick={() => this.handleClick(likeRecipe, unlikeRecipe)}
                                        >
                                          <i className="icon-heart " />
                                        </span>
                                      );
                                    }}
                                  </Mutation>
                                );
                              }}
                            </Mutation>
                          </div>
                        ) : null}
                      </div>
                      <div className="entry-navigation">
                        <div className="column text-left">
                          <div className="btn btn-outline-secondary btn-sm" disabled>
                            <i className="icon-arrow-left" />
                            &nbsp;Prev
                          </div>
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
                          <div className="btn btn-outline-secondary btn-sm" disabled>
                            Next&nbsp;
                            <i className="icon-arrow-right" />
                          </div>
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

const cRecipePage = withRouter(RecipePage);

export { cRecipePage as RecipePage };
