/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/prefer-default-export */
// imports
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';

// local imports
import { PageTitle } from '../PageTitle';
import { ADD_RECIPE, GET_ALL_RECIPES } from '../../queries';

const INITITAL_STATE = {
  name: '',
  description: '',
  instructions: '',
  category: 'Breakfast',
  userName: '',
};

class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITITAL_STATE };
  }

  componentDidMount() {
    this.setState({
      userName: this.props.session.getCurrentUser.userName,
    });
  }

  clearState = () => {
    this.setState({ ...INITITAL_STATE });
  };

  handleSubmit = (event, addRecipe) => {
    const { history } = this.props;
    event.preventDefault();
    addRecipe().then(({ data }) => {
      this.clearState();
      history.push('/');
    });
    history.push('/');
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  // updateCache = (cache, data) => {
  //   cache.readQuery({query: })
  // };

  render() {
    const { name, description, instructions, category, userName } = this.state;
    return (
      <Mutation
        mutation={ADD_RECIPE}
        variables={{ name, description, instructions, category, userName }}
        refetchQueries={[{ query: GET_ALL_RECIPES }]}
        // update={this.updateCache}
      >
        {(addRecipe, { data, loading, error }) => {
          return (
            <>
              <PageTitle title="Add and Share your recipes" bcrumbs="Add Recipes" />
              <div className="container padding-bottom-3x">
                <div className="row justify-content-center">
                  <form className="row" onSubmit={e => this.handleSubmit(e, addRecipe)}>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="name">Recipe Name</label>
                        <input
                          className="form-control form-control-rounded"
                          type="text"
                          name="name"
                          id="name"
                          value={name}
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="description">Recipe Description</label>
                        <input
                          className="form-control form-control-rounded"
                          type="text"
                          name="description"
                          id="description"
                          value={description}
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="category">Recipe Time</label>
                        <select
                          className="form-control form-control-rounded"
                          id="category"
                          name="category"
                          value={category}
                          onChange={this.handleChange}
                        >
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
                          id="instructions"
                          name="instructions"
                          value={instructions}
                          rows={8}
                          required
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12 text-right">
                      <button
                        disabled={loading}
                        className="btn btn-primary btn-rounded"
                        type="submit"
                      >
                        Add Recipe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </>
          );
        }}
      </Mutation>
    );
  }
}

const cAddRecipe = withRouter(AddRecipe);

export { cAddRecipe as AddRecipe };
