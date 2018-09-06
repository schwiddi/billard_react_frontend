import React, { Component } from 'react';
import NavBar from './components/navbar';
import axios from 'axios';
import Games from './components/games';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import _ from 'lodash';

const endpoint = 'http://localhost:3001/api/v1/';

class App extends Component {
  state = {
    games: [],
    players: []
  };

  async componentDidMount() {
    const { data: games } = await axios.get(endpoint + 'games');
    this.setState({ games });

    const { data: players } = await axios.get(endpoint + 'players');
    this.setState({ players });
  }

  handleDelete = async id => {
    axios.delete(endpoint + 'games/' + id);

    const newgames = this.state.games.filter(p => p.id !== id);

    this.setState({ games: newgames });
  };

  handleNewGame = async () => {
    const newgame = {
      playerA: 'zzz',
      playerB: 'ffhhf',
      scoreplayerA: 0,
      scoreplayerB: 1
    };
    const { data: game } = await axios.post(endpoint + 'games', newgame);
    const tmpgame = game[0];
    const newtmpgame = _.pick(tmpgame, [
      'id',
      'playerA',
      'scoreplayerA',
      'playerB',
      'scoreplayerB'
    ]);
    const pushnewgamestate = [newtmpgame, ...this.state.games];
    this.setState({ games: pushnewgamestate });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalPlayers={this.state.players.length}
          onNew={this.handleNewGame}
          totalGames={this.state.games.length}
        />
        <main role="main" className="container">
          <div className="starter-template">
            <Games onDelete={this.handleDelete} games={this.state.games} />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
