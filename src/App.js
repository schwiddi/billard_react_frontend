import React, { Component } from 'react';
import NavBar from './components/navbar';
import Games from './components/games';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { getGames } from './services/fakeGameService';
import _ from 'lodash';

class App extends Component {
  state = {
    games: getGames(),
    players: [],
    pageSize: 6,
    currentPage: 1
  };

  componentWillMount = () => {
    const allgames = this.state.games;
    let allplayers = [];
    for (let i = 0; i < allgames.length; i++) {
      allplayers.push(allgames[i].playerA);
      allplayers.push(allgames[i].playerB);
    }
    let playersdistinct = _.uniq(allplayers);
    this.setState({ players: playersdistinct });
  };

  handleDelete = gameId => {
    const newgames = this.state.games.filter(i => i._id !== gameId);
    this.setState({ games: newgames });
    const allgames = newgames;
    let allplayers = [];
    for (let i = 0; i < allgames.length; i++) {
      allplayers.push(allgames[i].playerA);
      allplayers.push(allgames[i].playerB);
    }
    let playersdistinct = _.uniq(allplayers);
    this.setState({ players: playersdistinct });
  };

  handleNew = () => {
    alert('Not implemented yet...');
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalPlayers={this.state.players.length}
          onNew={this.handleNew}
          totalGames={this.state.games.length}
        />
        <main role="main" className="container">
          <div className="starter-template">
            <Games
              onDelete={this.handleDelete}
              games={this.state.games}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
