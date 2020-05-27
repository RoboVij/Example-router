import React, { Component } from 'react';
import './App.css';
import Chips from './Chips';
import Navbar from './Navbar';
import VendingMachine from './VendingMachine';
import Sardine from './Sardine';
import { Route, Switch, NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <VendingMachine />} />
          <Route exact path="/chips" render={() => <Chips />} />
          <Route exact path="/sardine" render={() => <Sardine />} />
        </Switch>
      </div>
    );
  }
}

export default App;
