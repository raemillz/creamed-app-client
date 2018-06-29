import React from 'react';
import '../App.css';
import HomePageImage from './HomePageImage';
import '../styles/homepage.css';
import SiteInstructions from './SiteInstructions';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1 className="title"> Crème de la Cream </h1>
        <h3 className="subheading"> get inspired. </h3>
        <h3 className="subheading"> get creative. </h3>
        <HomePageImage/>
        <div className="bottom">
          <SiteInstructions/>
        </div>
      </div>
    )
  }
}

export default Home;
