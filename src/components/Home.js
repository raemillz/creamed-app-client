import React from 'react';
import '../App.css'
import HomePageImage from './HomePageImage'
import '../styles/homepage.css'

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1 className="title"> Crème de la Cream </h1>
        <h3> blablabla </h3>
        <h3> blablabla </h3>
        <HomePageImage/>
      </div>
    )
  }
}

export default Home;
