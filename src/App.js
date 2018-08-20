import React, { Component } from 'react';
import NavBar from './components/nav';
import Games from './components/games';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="container">
        <NavBar />
        <Games />
      </main>
    );
  }
}

export default App;
