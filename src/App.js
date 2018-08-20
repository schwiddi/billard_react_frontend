import React, { Component } from 'react';
import NavBar from './components/navbar';
import Games from './components/games';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { getGames } from './services/fakeGameService';

class App extends Component {
  state = {
    games: getGames()
  };

  handleDelete = gameId => {
    const newgames = this.state.games.filter(i => i._id !== gameId);
    this.setState({ games: newgames });
    alert(`Game was deleted: ${gameId}`);
  };

  handleNew = () => {
    alert('Not implemented yet...');
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Games
            onDelete={this.handleDelete}
            onNew={this.handleNew}
            games={this.state.games}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
