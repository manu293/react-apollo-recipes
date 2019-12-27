/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { onError } from 'apollo-link-error';

// local import
// import '../../common.styles';
import './signUp.styles.scss';
import '../../common.styles.scss';

// local imports
import { SIGNUP_USER } from '../../../queries';
import { Alert } from '../../Alert';

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
    e.preventDefault();
    signUpUser()
      .then(data => {
        console.log('The token is : ', data);
      })
      .catch(resp => {
        const errors = resp.graphQLErrors.map(error => error.message);
        this.setState({ errMessage: errors[0] });
      });
    this.clearState();
  };

  render() {
    const { userName, email, password, confirmPassword, errMessage } = this.state;
    return (
      <div className="row">
        <div className="col-md-12">
          <Mutation mutation={SIGNUP_USER} variables={{ userName, email, password }}>
            {(signUpUser, { data, loading, error }) => {
              return (
                <form
                  className="card"
                  style={{ marginLeft: '400px', marginRight: '400px', marginTop: '50px' }}
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
                      <a className="navi-link" href="#">
                        Forgot password?
                      </a>
                    </div>
                    <div className="text-center text-sm-right">
                      <button
                        className="btn btn-primary margin-bottom-none"
                        type="submit"
                        disabled={loading || password !== confirmPassword}
                      >
                        SignUp
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
    );
  }
}

export { signUp };
