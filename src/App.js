import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Sweets from './containers/Sweets';
import SweetForm from './containers/SweetForm';
import SweetShow from './containers/SweetShow';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <div>
              <Navbar/>
              <Container>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/sweets' component={Sweets}/>
                <Route exact path='/sweets/new' component={SweetForm}/>
                <Route path='/sweets/:SweetId' component={SweetShow}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact}/>
              </Switch>
              </Container>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
