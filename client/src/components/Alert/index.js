/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
// imports
import React, { Component } from 'react';

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

export { Alert };
