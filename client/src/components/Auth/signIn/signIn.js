/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/prefer-default-export */

// import
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// local import
import '../signUp/signUp.styles.scss';
import '../../common.styles.scss';
import { PageTitle } from '../../PageTitle';
import { SIGNIN_USER } from '../../../queries';
import { Alert } from '../../Alert';

const INITITAL_STATE = {
  userName: '',
  password: '',
  errMessage: '',
};

class signIn extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITITAL_STATE };
  }

  clearState = () => {
    this.setState({ ...INITITAL_STATE });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e, signInUser) => {
    const { history, refetch } = this.props;
    e.preventDefault();
    signInUser()
      .then(async ({ data }) => {
        localStorage.setItem('token', data.signInUser.token);
        console.log('The token is : ', data);
        await refetch();
      })
      .catch(resp => {
        const errors = resp.graphQLErrors.map(error => error.message);
        this.setState({ errMessage: errors[0] });
      });
    this.clearState();
    history.push('/');
  };

  render() {
    const { userName, password, errMessage } = this.state;
    return (
      <>
        <PageTitle title="Login" bcrumbs="Login" />
        <div className="container padding-bottom-3x mb-2">
          <div className="row">
            <div className="col-md-6" style={{ marginLeft: '300px' }}>
              <Mutation mutation={SIGNIN_USER} variables={{ userName, password }}>
                {(signInUser, { data, loading, error }) => {
                  return (
                    <form className="card" onSubmit={e => this.handleSubmit(e, signInUser)}>
                      <div className="card-body">
                        <div className="row margin-bottom-1x">
                          <div className="col">
                            <h4>
                              New Here, Just take a moment to{' '}
                              <Link to="/signup" style={{ textDecoration: 'none' }}>
                                Sign Up
                              </Link>
                            </h4>
                          </div>
                        </div>
                        <h4 className="margin-bottom-1x">Or use the form below to Login</h4>
                        <div className="form-group input-group">
                          <input
                            className="form-control"
                            type="userName"
                            name="userName"
                            placeholder="Username"
                            value={userName}
                            onChange={this.handleChange}
                            required
                          />
                          <span className="input-group-addon">
                            <i className="icon-user" />
                          </span>
                        </div>
                        <div className="form-group input-group">
                          <input
                            className="form-control"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={this.handleChange}
                            required
                          />
                          <span className="input-group-addon">
                            <i className="icon-lock" />
                          </span>
                        </div>
                        <div className="d-flex flex-wrap justify-content-between padding-bottom-1x">
                          <div className="custom-control custom-checkbox">
                            <input
                              className="custom-control-input"
                              type="checkbox"
                              id="remember_me"
                              defaultChecked
                            />
                            <label className="custom-control-label" htmlFor="remember_me">
                              Remember me
                            </label>
                          </div>
                          <a className="navi-link" href="account-password-recovery.html">
                            Forgot password?
                          </a>
                        </div>
                        <div className="text-center text-sm-right">
                          <button className="btn btn-primary margin-bottom-none" type="submit">
                            Login
                          </button>
                        </div>
                      </div>
                      {error ? <Alert type="danger" message={errMessage} /> : ''}
                    </form>
                  );
                }}
              </Mutation>
            </div>
          </div>
        </div>
      </>
    );
  }
}

signIn.propTypes = {
  history: PropTypes.object,
};

const signInComp = withRouter(signIn);

export { signInComp as SignIn };
