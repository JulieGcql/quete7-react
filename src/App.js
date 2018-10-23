import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Movie from './Movie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Movie />
      </div>
    );
  }
}

export default App;
