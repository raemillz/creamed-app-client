import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { likeSweet } from '../actions/sweetActions';
import { bindActionCreators } from 'redux';
import '../styles/sweetcard.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import SweetShow from '../containers/SweetShow';


class SweetCard extends Component {

	render() {

		const { sweet, sweets } = this.props;

		return (
			<div key={sweet.id} className="SweetCard">
				<Link to={`sweets/${sweet.id}`}><h1 className="card-title">{sweet.name}</h1></Link>
		    <div className="card-read"></div>
				<button className="card-title" onClick={() => {this.props.likeSweet(sweet, sweets)}}>Yum!</button> <div className="card-like">{this.props.sweet.likes}</div>
				<br></br>
				<br></br>
		  </div>
		)
	}
}


function mapStateToProps(state) {
	return {
		sweets: state.sweets
	}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ likeSweet }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SweetCard);
