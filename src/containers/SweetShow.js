import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSweet } from '../actions/sweetActions';
import { deleteSweet } from '../actions/sweetActions';
import SweetForm from './SweetForm';
import SweetCard from '../components/SweetCard';
import Sweets from './Sweets';
import LikeButton from '../components/LikeButton';
import { likeSweet } from '../actions/sweetActions';
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'




class SweetShow extends React.Component {


  handleOnClick = () => {
    this.props.likeSweet(this.props.sweet[0])
  }

  componentDidMount() {
    let sweetId = this.props.match.params.sweetId
    this.props.fetchSweet(sweetId);
	}

  render() {
    let sweet = this.props.sweet[0];
    const {deleteSweet, history} = this.props;

    return (
    <div className='sweetShow'>
      {sweet ? (
        <div>
          <h1 className="sweetName">{sweet.name}</h1>
          <h3><p>Base: <br></br>{sweet.base}</p></h3>
          <h3><p>Ingredients: <br></br>{sweet.ingredients}</p></h3>
        </div>
    ) : (
      <p>Loading...</p>
    )}
    <br></br>
    <button onClick={() => deleteSweet(sweet.id, history)}>
      Delete
    </button>
    {sweet ? <LikeButton sweet={sweet} likeSweet={this.handleOnClick}/> : 'some error happened'}
    </div>
    )
  }
}


function mapStateToProps(state) {
  return ({
    sweet: state.sweets
  })
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchSweet, deleteSweet, likeSweet }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SweetShow));
