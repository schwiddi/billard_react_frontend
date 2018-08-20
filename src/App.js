import React, { Component } from 'react';
import './App.css';
import NavBar from './components/nav';
import Games from './components/games';

class App extends Component {
  render() {
    return (
      <div className="m-2">
        <NavBar />
        <Games />
      </div>
    );
  }
}

export default App;
