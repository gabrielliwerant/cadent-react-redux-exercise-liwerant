import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListContainer from './components/ListContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Cadent React Redux Exercise</h1>
        </header>
        <br />
        <ListContainer />
      </div>
    );
  }
}

export default App;
