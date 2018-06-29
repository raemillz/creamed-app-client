import React from 'react';
import { connect } from 'react-redux';
import { updateSweetFormData } from '../actions/sweetForm';
import { createSweet } from '../actions/sweetActions';
import FormError from '../components/FormError';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import FormPageImage from '../components/FormPageImage';
import '../styles/form.css';

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
        <h1 className="title">Create a New Flavor</h1>
        {this.props.errors === true ? <FormError/> : null}

      <form className="form" onSubmit={this.handleOnSubmit}>
        <div>
          <label htmlFor="name" className="form-label">Name:</label>
          <br></br>

          <input
            type="text"
            onChange={this.handleOnChange}
            name="name"
            value={name}
          />
        </div>
        <br></br>
        <br></br>

        <div>
          <label htmlFor="base" className="form-label">Base:</label>
          <br></br>

          <input
            type="text"
            onChange={this.handleOnChange}
            name="base"
            value={base}
          />
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="ingredients" className="form-label">Ingredients:</label>
          <br></br>

          <textarea
            type="text"
            onChange={this.handleOnChange}
            name="ingredients"
            value={ingredients}
          />
        </div>
        <br></br>
        <br></br>
        <div className="">
          <button className="form-submit" type="submit">Add Sweet</button>
        </div>

      </form>
      <FormPageImage/>
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
