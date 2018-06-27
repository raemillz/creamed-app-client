import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css'
import SweetCard from '../components/SweetCard';
import SweetForm from './SweetForm';
import SweetShow from './SweetShow';
import { getSweets } from '../actions/sweetActions';
import { Switch, Route } from 'react-router-dom';
import { likeSweet } from '../actions/sweetActions';


class Sweets extends Component {

  componentDidMount() {
    this.props.getSweets()
  }

  render() {
    const { sweets, match } = this.props;
    const sortedSweets = sweets.sort(function(a, b) {
            return b.likes - a.likes;
          })

    return (
      <div>
      <Switch>
      <Route exact path={match.url}
       render={() =>
      <div className="SweetsContainer">
      <h1 className="sweetName">Sweets</h1>
        {sortedSweets.map(sweet => <SweetCard key={sweet.id} sweet={sweet} /> )}
      </div>
    }
    />
    <Route exact path="/sweets/new" component={SweetForm}/>
         <Route
           path="/sweets/:sweetId"
           component={SweetShow}
         />
       </Switch>
     </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    sweets: state.sweets
  })
}

export default connect(mapStateToProps, {getSweets, likeSweet})(Sweets);
