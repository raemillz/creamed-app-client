import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSweet } from '../actions/sweetActions';
import { deleteSweet } from '../actions/sweetActions';
import SweetForm from './SweetForm';
import SweetCard from '../components/SweetCard';
import Sweets from './Sweets';
import LikeButton from '../components/LikeButton';
import { likeSweet } from '../actions/sweetActions';



class SweetShow extends Component {


  handleOnClick = () => {
    this.props.likeSweet(this.props.sweet[0])
  }

  componentDidMount() {
    this.props.fetchSweet(this.props.match.params.sweetId);
	}

  render() {
    let sweet = this.props.sweet[0];
    const {deleteSweet, history} = this.props;

    return (
    <div className='sweetShow'>
      {sweet ? (
      <div>
        <h1 className="sweetName">{sweet.name}</h1>
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


const mapStateToProps = (state) => {
  return ({
    sweet: state.sweets
  })
}

export default connect(mapStateToProps, {fetchSweet, deleteSweet, likeSweet})(SweetShow);
