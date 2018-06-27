
import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { likeSweet } from '../actions/sweetActions';

class SweetCard extends Component {

	render() {

		const { sweet, sweets } = this.props;

		return (
			<div key={sweet.id} className="SweetCard">
				<a href={`sweets/${sweet.id}`}>
					<h1 className="card-title">{sweet.name}</h1>
				</a>
		    <br></br>
		    <img src="http://media.dish.allrecipes.com/wp-content/uploads/2014/11/Allrecipes-Super-Easy-Stir-Fry-1-Position-2.jpg" alt="" className="media" />
		    <br></br>
		    <div className="card-read">Read</div>
				<button onClick={() => {this.props.likeSweet(sweet, sweets)}}>Like</button> {this.props.sweet.likes}
		  </div>
		)
	}
}


const mapStateToProps = state => {
	return {
		sweets: state.sweets
	}
}



export default connect(mapStateToProps, {likeSweet})(SweetCard);
