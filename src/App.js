import React, { Component } from 'react';
import NavBar from './components/navbar';
import axios from 'axios';
import Games from './components/games';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import _ from 'lodash';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.interceptors.response.use(null, error => {
  toast.error('Something went wrong....');
  return Promise.reject(error);
});

const endPoint = 'http://localhost:3001/api/v1/';

class App extends Component {
  state = {
    games: [],
    players: []
  };

  async componentDidMount() {
    const { data: games } = await axios.get(endPoint + 'games');
    this.setState({ games });

    const { data: players } = await axios.get(endPoint + 'players');
    this.setState({ players });
  }

  handleDelete = async id => {
    const originalGames = this.state.games;
    const newGames = this.state.games.filter(p => p.id !== id);
    this.setState({ games: newGames });

    try {
      await axios.delete(endPoint + 'games/' + id);
    } catch (ex) {
      this.setState({ games: originalGames });
    }
  };

  handleNewGame = async () => {
    const newgame = {
      playerA: 'zzz',
      playerB: 'ffhhf',
      scoreplayerA: 0,
      scoreplayerB: 1
    };

    try {
      const { data: game } = await axios.post(endPoint + 'games', newgame);
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
    } catch (ex) {}
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
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
