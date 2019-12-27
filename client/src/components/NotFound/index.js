/* eslint-disable import/prefer-default-export */
// imports
import React from 'react';
import { Link } from 'react-router-dom';

// local imports
import './notFound.styles.scss';
import '../common.styles.scss';

const NotFound = () => {
  return (
    <div>
      <section
        className="fw-section margin-top-3x"
        style={{ backgroundImage: 'url(/img/404-bg.png)' }}
      >
        <h1 className="display-404 text-center">404</h1>
      </section>
      <div className="container padding-bottom-3x mb-1">
        <div className="text-center">
          <h2>Page Not Found</h2>
          <p>
            It seems we can’t find the page you are looking for.{' '}
            <Link to="/">Go back to Homepage</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export { NotFound };
