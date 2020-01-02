/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/prefer-default-export */
// imports
import React, { Component } from 'react';

// local imports
import { PageTitle } from '../PageTitle';

class AddRecipe extends Component {
  render() {
    return (
      <>
        <PageTitle title="Add and Share your recipes" bcrumbs="Add Recipes" />
        <div className="container padding-bottom-3x">
          <div className="row justify-content-center">
            <form className="row" method="post">
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="help_name">Recipe Name</label>
                  <input
                    className="form-control form-control-rounded"
                    type="text"
                    id="help_name"
                    required
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="help_email">Recipe Description</label>
                  <input
                    className="form-control form-control-rounded"
                    type="email"
                    id="help_email"
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="help_category">Recipe Time</label>
                  <select className="form-control form-control-rounded" id="help_category">
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Snacks</option>
                    <option>Dinner</option>
                  </select>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="help_question">Recipe Instructions </label>
                  <textarea
                    className="form-control form-control-rounded"
                    id="help_question"
                    rows={8}
                    required
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="col-12 text-right">
                <button className="btn btn-primary btn-rounded" type="submit">
                  Add Recipe
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export { AddRecipe };
