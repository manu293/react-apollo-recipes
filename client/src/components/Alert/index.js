/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prefer-stateless-function */
// imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// local imports
import './alert.styles.scss';
import '../common.styles.scss';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.displayIcons = {
      primary: 'icon-bell',
      info: 'icon-help-circle',
      success: 'icon-check-circle',
      warning: 'icon-alert-triangle',
      danger: 'icon-slash',
    };
  }

  render() {
    const { type, message } = this.props;
    return (
      <div
        className={`alert alert-${type} alert-dismissible fade show text-center margin-bottom-1x`}
      >
        <span className="alert-close" data-dismiss="alert" />
        <i className={this.displayIcons[type]} />
        &nbsp;&nbsp;<span className="text-medium">{message}</span>
      </div>
    );
  }
}

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export { Alert };
