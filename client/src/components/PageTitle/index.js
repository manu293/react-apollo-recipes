/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prefer-stateless-function */
// imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// local imports
import './pageTitle.styles.scss';
import '../common.styles.scss';

class PageTitle extends Component {
  render() {
    const { title, bcrumbs } = this.props;
    return (
      <div className="page-title">
        <div className="container">
          <div className="column">
            <h1>{title}</h1>
          </div>
          <div className="column">
            <ul className="breadcrumbs">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="separator">&nbsp;</li>
              <li>{bcrumbs}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  bcrumbs: PropTypes.string.isRequired,
};

export { PageTitle };
