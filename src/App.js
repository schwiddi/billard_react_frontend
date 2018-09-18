import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import _ from 'lodash';
import NavBar from './components/navbar';
import Home from './components/home';
import Games from './components/games';
import Players from './components/players';
import AddGameForm from './components/addgameform';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

// axios.interceptors.response.use(null, error => {
//   toast.error('Error!!!', {
//     position: 'bottom-right',
//     autoClose: false,
//     closeOnClick: true
//   });
//   return Promise.reject(error);
// });

console.log(process.env);

// const endPoint = 'http://schwiddi.internet-box.ch:3001/api/v1/';
const endPoint = 'http://localhost:3001/api/v1/';

class App extends Component {
  state = {
    games: [],
    players: [],
    playernames: [],
    playersranked: [],
    playersunranked: [],
    mostgames: [],
    bestplayer: []
  };

  async componentDidMount() {
    try {
      const { data: games } = await axios.get(endPoint + 'games');
      if (games === 'Currently no Games in Database...') {
        toast.info('No Games', {
          position: 'bottom-right',
          autoClose: false,
          closeOnClick: true
        });
      } else {
        this.setState({ games });

        toast.info('Games loaded', {
          position: 'bottom-right',
          autoClose: true,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true
        });
      }

      const { data: players } = await axios.get(endPoint + 'players');
      if (players === 'Currently no Players in Database...') {
        toast.info('No Players', {
          position: 'bottom-right',
          autoClose: false,
          closeOnClick: true
        });
      } else {
        this.setState({ players });

        let playernames = this.state.players.map(function(el) {
          return el.name;
        });
        playernames.sort(function(a, b) {
          return a.toLowerCase().localeCompare(b.toLowerCase());
        });
        this.setState({ playernames });
        const { data: playersranked } = await axios.get(
          endPoint + 'playersranked'
        );
        if (playersranked === 'Currently no ranked Players in Database...') {
          return null;
        } else {
          this.setState({ playersranked });
        }

        const { data: playersunranked } = await axios.get(
          endPoint + 'playersunranked'
        );
        if (
          playersunranked === 'Currently no unranked Players in Database...'
        ) {
          return null;
        } else {
          this.setState({ playersunranked });
        }

        function comparetotal(a, b) {
          if (a.games_total < b.games_total) return 1;
          if (a.games_total > b.games_total) return -1;
          return 0;
        }
        let mostgamestmp = players;
        mostgamestmp.sort(comparetotal);
        let mostgames = mostgamestmp[Object.keys(mostgamestmp)[0]];
        this.setState({ mostgames });

        function comparewinloss(a, b) {
          if (a.games_win_lost < b.games_win_lost) return 1;
          if (a.games_win_lost > b.games_win_lost) return -1;
          return 0;
        }
        let bestplayertmp = playersranked;
        bestplayertmp.sort(comparewinloss);
        let bestplayer = bestplayertmp[Object.keys(bestplayertmp)[0]];
        this.setState({ bestplayer });

        toast.info('Players loaded', {
          position: 'bottom-right',
          autoClose: true,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true
        });
      }
    } catch (ex) {
      console.log(ex);
      toast.error('Backend Error', {
        position: 'bottom-right',
        autoClose: false,
        closeOnClick: true
      });
    }
  }

  handleDelete = async id => {
    const originalGames = this.state.games;
    const newGames = this.state.games.filter(p => p.id !== id);
    this.setState({ games: newGames });

    try {
      await axios.delete(endPoint + 'games/' + id);
      toast.success('Game deleted', {
        position: 'bottom-right',
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true
      });
    } catch (ex) {
      this.setState({ games: originalGames });
      toast.error('Game not deleted', {
        position: 'bottom-right',
        autoClose: false,
        closeOnClick: true
      });
    }
  };

  handleNewGame = async newgame => {
    try {
      // call backend with new game
      const { data: game } = await axios.post(endPoint + 'games', newgame);
      const tmpgame = game[0];
      // then pick only needed info
      const newtmpgame = _.pick(tmpgame, [
        'id',
        'playerA',
        'scoreplayerA',
        'playerB',
        'scoreplayerB'
      ]);
      // and then push the new games list to state
      const pushnewgamestate = [newtmpgame, ...this.state.games];
      this.setState({ games: pushnewgamestate });
      toast.success('Saved Game', {
        position: 'bottom-right',
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true
      });

      // we need to update the players also
      const { data: players } = await axios.get(endPoint + 'players');
      this.setState({ players });
      let playernames = this.state.players.map(function(el) {
        return el.name;
      });
      playernames.sort(function(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
      });
      this.setState({ playernames });

      const { data: playersranked } = await axios.get(
        endPoint + 'playersranked'
      );
      if (playersranked === 'Currently no ranked Players in Database...') {
        return null;
      } else {
        this.setState({ playersranked });
      }

      const { data: playersunranked } = await axios.get(
        endPoint + 'playersunranked'
      );
      if (playersunranked === 'Currently no unranked Players in Database...') {
        return null;
      } else {
        this.setState({ playersunranked });
      }
    } catch (ex) {
      toast.error('Game not saved', {
        position: 'bottom-right',
        autoClose: false,
        closeOnClick: true
      });
    }
  };

  render() {
    let mt = { marginTop: 10 };
    return (
      <React.Fragment>
        <ToastContainer position="bottom-right" newestOnTop rtl={false} />
        <NavBar />
        <main role="main" className="container">
          <div style={mt} className="starter-template">
            <Route
              path="/"
              exact
              render={props => (
                <Home
                  players={this.state.players}
                  games={this.state.games}
                  mostgamer={this.state.mostgames.name}
                  mostgamercount={this.state.mostgames.games_total}
                  bestplayer={this.state.bestplayer.name}
                  bestplayerratio={this.state.bestplayer.games_win_lost}
                  {...props}
                />
              )}
            />
            <Route
              path="/games"
              exact
              render={props => <Games games={this.state.games} {...props} />}
            />
            <Route
              path="/players"
              exact
              render={props => (
                <Players
                  playersranked={this.state.playersranked}
                  playersunranked={this.state.playersunranked}
                  {...props}
                />
              )}
            />
            <Route
              path="/addgame"
              exact
              render={props => (
                <AddGameForm
                  playernames={this.state.playernames}
                  onNew={this.handleNewGame}
                  {...props}
                />
              )}
            />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
