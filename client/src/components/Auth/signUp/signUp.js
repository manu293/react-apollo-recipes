/* eslint-disable import/prefer-default-export */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
// import
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// local import
// import '../../common.styles';
import './signUp.styles.scss';
import '../../common.styles.scss';
import { SIGNUP_USER } from '../../../queries';
import { Alert } from '../../Alert';
import { PageTitle } from '../../PageTitle';

const INITITAL_STATE = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
  errMessage: '',
};

class signUp extends Component {
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

  handleSubmit = (e, signUpUser) => {
    const { history, refetch } = this.props;
    e.preventDefault();
    signUpUser()
      .then(async ({ data }) => {
        localStorage.setItem('token', data.signInUser.token);
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
    const { userName, email, password, confirmPassword, errMessage } = this.state;
    return (
      <>
        <PageTitle title="Register Account" bcrumbs="Register/Sign Up" />
        <div className="row">
          <div className="col-md-12">
            <Mutation mutation={SIGNUP_USER} variables={{ userName, email, password }}>
              {(signUpUser, { data, loading, error }) => {
                return (
                  <form
                    className="card"
                    style={{ marginLeft: '400px', marginRight: '400px' }}
                    onSubmit={e => this.handleSubmit(e, signUpUser)}
                  >
                    <div className="card-body">
                      <div className="form-group input-group">
                        <input
                          className="form-control"
                          type="userName"
                          name="userName"
                          placeholder="UserName"
                          autoComplete="off"
                          required
                          value={userName}
                          onChange={this.handleChange}
                        />
                        <span className="input-group-addon">
                          <i className="icon-user" />
                        </span>
                      </div>
                      <div className="form-group input-group">
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          placeholder="Email"
                          autoComplete="off"
                          value={email}
                          required
                          onChange={this.handleChange}
                        />
                        <span className="input-group-addon">
                          <i className="icon-arrow-right-circle" />
                        </span>
                      </div>
                      <div className="form-group input-group">
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          placeholder="Password"
                          autoComplete="off"
                          value={password}
                          required
                          onChange={this.handleChange}
                        />
                        <span className="input-group-addon">
                          <i className="icon-lock" />
                        </span>
                      </div>
                      <div className="form-group input-group">
                        <input
                          className="form-control"
                          type="password"
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          autoComplete="off"
                          value={confirmPassword}
                          required
                          onChange={this.handleChange}
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
                        <button
                          className="btn btn-primary margin-bottom-none"
                          type="submit"
                          disabled={loading || password !== confirmPassword}
                        >
                          SignUp
                        </button>
                      </div>
                      <div className="d-flex flex-wrap justify-content-between padding-bottom-1x">
                        <h4 className="margin-top-1x">
                          Already have an account{' '}
                          <Link to="/signin" style={{ textDecoration: 'none' }}>
                            Login Here
                          </Link>
                        </h4>
                      </div>
                    </div>
                    {error ? <Alert type="danger" message={errMessage} /> : ''}
                  </form>
                );
              }}
            </Mutation>
          </div>
        </div>
      </>
    );
  }
}

signUp.propTypes = {
  history: PropTypes.object,
};

const signUpComp = withRouter(signUp);

export { signUpComp as SignUp };
