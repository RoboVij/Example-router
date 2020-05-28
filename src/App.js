import React, { Component } from 'react';
import './App.css';
import DogDetails from './Patterns/DogDetails';
import DogList from './Patterns/DogList';
import Navbar1 from './Patterns/Navbar1';
import Chips from './Chips';
import Navbar from './Navbar';
import VendingMachine from './VendingMachine';
import Sardine from './Sardine';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import whiskey from './imgs/whiskey.jpg';
import tubby from './imgs/tubby.jpg';
import hazel from './imgs/hazel.jpg';

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }
  render() {
    const getDog = props => {
      let name = props.match.params.name;
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      );
      return <DogDetails {...props} dog={currentDog} />;
    };
    return (
      <div>
        {/* <Navbar />
        <Switch>
          <Route exact path="/" render={() => <VendingMachine />} />
          <Route exact path="/chips" render={() => <Chips />} />
          <Route exact path="/sardine" render={() => <Sardine />} />
        </Switch> */}
        <Navbar1 dogs={this.props.dogs} />
        <Switch>
          <Route exact path="/dogs" render={() => <DogList dogs={this.props.dogs} />} />
          <Route exact path="/dogs/:name" render={getDog} />
          <Redirect to="/dogs" />
        </Switch>
      </div>
    );
  }
}

export default App;
