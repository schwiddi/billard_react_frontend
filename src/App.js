import React, { Component } from 'react';
import NavBar from './components/navbar';
import Games from './components/games';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Games />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
