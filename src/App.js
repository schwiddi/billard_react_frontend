import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import _ from 'lodash';
import NavBar from './components/navbar';
import Home from './components/home';
import Games from './components/games';
import Players from './components/players';
import Stats from './components/stats';
import AddGameForm from './components/addgameform';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

// axios.interceptors.response.use(null, error => {
//   toast.error('Error!!!', {
//     position: 'top-right',
//     autoClose: false,
//     closeOnClick: true
//   });
//   return Promise.reject(error);
// });

const endPoint = 'http://schwiddi.internet-box.ch:3001/api/v1/';
// const endPoint = 'http://localhost:3001/api/v1/';

class App extends Component {
  state = {
    games: [],
    players: []
    // scores: []
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
        toast.info('Players loaded', {
          position: 'bottom-right',
          autoClose: true,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true
        });
      }

      // build scores
      // let playerswithscores = {};
      // first make object with all players in it

      // then calculate for every player in the array the wins, losses and total games
      // win
      // loss
      // total
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
      toast.success('Saved Game', {
        position: 'top-right',
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true
      });
    } catch (ex) {
      toast.error('Game not saved', {
        position: 'top-right',
        autoClose: false,
        closeOnClick: true
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer position="top-right" newestOnTop rtl={false} />
        <NavBar />
        <main role="main" className="container">
          <div className="starter-template">
            <Route path="/" exact render={props => <Home {...props} />} />
            <Route
              path="/games"
              exact
              render={props => (
                <Games
                  onDelete={this.handleDelete}
                  games={this.state.games}
                  {...props}
                />
              )}
            />
            <Route
              path="/players"
              exact
              render={props => (
                <Players
                  players={this.state.players}
                  games={this.state.games}
                  {...props}
                />
              )}
            />
            <Route path="/stats" exact render={props => <Stats {...props} />} />
            <Route
              path="/addgame"
              exact
              render={props => (
                <AddGameForm
                  players={this.state.players}
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
