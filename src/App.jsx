import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Pokemon from "./components/Pokemon/Pokemon";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hp1: 100,
      hp2: 120,
      message: "Fight!",
    };
  }
  handlePikachuAttack = () => {
    console.log("pikachu attack");

    if (this.state.hp2 < 1) {
      this.setState({
        message: "Charizard is dead, RIP",
      });
    } else {
      this.setState({
        hp2: this.state.hp2 - 10,
        message: "Pikachu attacks for 10 damage",
      });
    }
  };
  handleCharizardAttack = () => {
    console.log("char attack");
    if (this.state.hp1 < 1) {
      this.setState({
        message: "Pikachu is dead, RIP",
      });
    } else {
      this.setState({
        hp1: this.state.hp1 - 20,
        message: "Charizard attacks for 20 damage",
      });
    }
  };

  render() {
    return (
      <div className='App'>
        <Pokemon
          name={"Pikachu"}
          hp={this.state.hp1}
          image={"https://pokestop.io/img/pokemon/pikachu-256x256.png"}
          attack={this.handlePikachuAttack}
        ></Pokemon>
        <Pokemon
          name={"Charizard"}
          hp={this.state.hp2}
          image={"https://pokestop.io/img/pokemon/charizard-256x256.png"}
          attack={this.handleCharizardAttack}
        ></Pokemon>
        <div className='message'>
          <p className='message-text'>{this.state.message}</p>
        </div>
      </div>
    );
  }
}
