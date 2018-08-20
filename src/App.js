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
        <NavBar games={this.state.games} />
        <main role="main" className="container">
          <div className="starter-template">
            <Games
              onDelete={this.handleDelete}
              onNew={this.handleNew}
              games={this.state.games}
            />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
