import React, { Component } from 'react';
import Dogs from "./components/dogs";
import Scores from "./components/Scores";
import Header from "./components/Header"
import dogs from "./dogs.json";
import Data from "./components/History"
import Wrapper from "./components/Wrapper"
import './App.css';

class App extends Component {

  state= {

    dogs,
    score: 0,
    value: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    target: 0,
    wins: 0,
    loses:0

  };

  componentDidMount = () => {

    this.updateValues()
    this.setTarget()

  }

  handleScore = (id, value) => {

    this.setState({score: this.state.score + value})
    if (this.state.score > this.state.target) {
      let newLoses = this.state.loses + 1
      this.setState({score: 0, loses:})
      this.updateValues()
      this.setTarget()
    } else if (this.state.score === this.state.target) {
      let newWins = this.state.wins + 1
      this.setState({score: 0, wins: newWins})
      this.updateValues()
      this.setTarget()
    }
  };

  updateValues=()=>{
    let newValues = this.state.value.map(x => (x = (Math.floor(Math.random() * 12) + 1)))
    this.setState({value: newValues})
  }

  setTarget=()=>{
    let newTarget = (Math.floor(Math.random() * (120-19+1)));
    this.setState({target: newTarget})
  }

  render() {
    return (
      <div>
        <Header />
        <Scores target={this.state.target}
      </div>
    );
  }
}

export default App;
