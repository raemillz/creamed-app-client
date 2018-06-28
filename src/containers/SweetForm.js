import React from 'react';
import { connect } from 'react-redux';
import { updateSweetFormData } from '../actions/sweetForm';
import { createSweet } from '../actions/sweetActions';
import FormError from '../components/FormError';
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

class SweetForm extends React.Component {

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
      <div id="form-container">
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

function mapStateToProps(state) {
  return {
    sweetFormData: state.sweetFormData,
    errors: state.errors
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ updateSweetFormData, createSweet }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SweetForm));
