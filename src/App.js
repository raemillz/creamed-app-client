import React from 'react';
import './App.css';
import { withRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Sweets from './containers/Sweets';
import SweetForm from './containers/SweetForm';
import SweetShow from './containers/SweetShow';
import About from './components/About';
import Contact from './components/Contact';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div>
          <Navbar/>
          <Container>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
              <Route exact path={`${process.env.PUBLIC_URL}/sweets`} component={Sweets}/>
              <Route exact path={`${process.env.PUBLIC_URL}/sweets/new`} component={SweetForm}/>
              <Route path={`${process.env.PUBLIC_URL}/sweets/:sweetId`} component={SweetShow}/>
              <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About}/>
              <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
            </Switch>
          </Container>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
