import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game/game';

class App extends Component {
  render() {
    const props = {firstName: 'Ben', lastName: 'Hector'};
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Game {...props}/>
        </p>
      </div>
    );
  }
}

export default App;
