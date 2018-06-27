import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSweetFormData } from '../actions/sweetForm';
import { createSweet } from '../actions/sweetActions';
import FormError from '../components/FormError';

class SweetForm extends Component {

  handleOnChange = event => {
    const {name, value} = event.target;
    const currentSweetFormData = Object.assign({}, this.props.sweetFormData, {
      [name]: value
    })
    this.props.updateSweetFormData(currentSweetFormData)
  }

  handleOnSubmit = e => {
    e.preventDefault();
    const { createSweet, sweetFormData, history} = this.props;
		createSweet(sweetFormData, history);
  }

  render() {
    const { name, ingredients, base } = this.props.sweetFormData;

    return (
      <div>
        <h1 className="sweetName">Create a New Sweet</h1>
        {this.props.errors === true ? <FormError/> : null}

      <form onSubmit={this.handleOnSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            onChange={this.handleOnChange}
            name="name"
            value={name}
          />
        </div>

        <div>
          <label htmlFor="base">Base:</label>
          <input
            type="text"
            onChange={this.handleOnChange}
            name="base"
            value={base}
          />
        </div>

        <div>
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea
            type="text"
            onChange={this.handleOnChange}
            name="ingredients"
            value={ingredients}
          />
        </div>

        <div>
          <button type="submit">Add Sweet</button>
        </div>

      </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    sweetFormData: state.sweetFormData,
    errors: state.errors
  }
}

export default connect(mapStateToProps, {
  updateSweetFormData,
  createSweet
})(SweetForm);
