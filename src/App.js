import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import _ from 'lodash';
import NavBar from './components/navbar';
import Home from './components/home';
import Games from './components/games';
import Ranking from './components/ranking';
import AddGameForm from './components/forms/addgameform';
import AddGameForm2 from './components/forms/addgameform2';
import RegisterForm from './components/forms/registerform';
import LoginForm from './components/forms/loginform';
import ClaimPlayerIdForm from './components/forms/claimplayeridform';
import MyAdminPage from './components/admin/myadminpage';
import Profile from './components/profile/profile';
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

// setting header for all axios calls
axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');

// console.log(process.env);

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
    bestplayer: [],
    user: {}
  };

  comparewinloss(a, b) {
    if (a.games_win_lost < b.games_win_lost) return 1;
    if (a.games_win_lost > b.games_win_lost) return -1;
    return 0;
  }

  comparetotal(a, b) {
    if (a.games_total < b.games_total) return 1;
    if (a.games_total > b.games_total) return -1;
    return 0;
  }

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
        if (playersranked !== 'Currently no ranked Players in Database...') {
          this.setState({ playersranked });
          let bestplayertmp = playersranked;
          bestplayertmp.sort(this.comparewinloss);
          let bestplayer = bestplayertmp[Object.keys(bestplayertmp)[0]];
          this.setState({ bestplayer });
        }

        const { data: playersunranked } = await axios.get(
          endPoint + 'playersunranked'
        );
        if (
          playersunranked !== 'Currently no unranked Players in Database...'
        ) {
          this.setState({ playersunranked });
        }
        let mostgamestmp = players;
        mostgamestmp.sort(this.comparetotal);
        let mostgames = mostgamestmp[Object.keys(mostgamestmp)[0]];
        this.setState({ mostgames });
      }
      try {
        const jwt = localStorage.getItem('token');
        const user = jwtDecode(jwt);
        this.setState({ user });
      } catch (error) {}
    } catch (ex) {
      console.log(ex);
      toast.error('Backend Error', {
        position: 'bottom-right',
        autoClose: false,
        closeOnClick: true
      });
    }
  }

  handleGameDelete = async id => {
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

  handleNewUser = async newuser => {
    try {
      // call backend with new user
      await axios.post(endPoint + 'users', newuser);
      return true;
    } catch (ex) {
      console.log(ex);
      toast.error('error', {
        position: 'bottom-right',
        autoClose: false,
        closeOnClick: true
      });
      return false;
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

  handleLogin = async user => {
    try {
      const res = await axios.post(endPoint + 'auth', user);
      localStorage.setItem('token', res.headers['x-auth-token']);
      return true;
    } catch (ex) {
      toast.error('wrong data or not approved yet..', {
        position: 'bottom-right',
        autoClose: false,
        closeOnClick: true
      });
      return false;
    }
  };
  handleLogout = async () => {
    try {
      localStorage.removeItem('token');
      window.location = '/';
    } catch (ex) {}
  };

  render() {
    let mt = { marginTop: 10 };
    return (
      <React.Fragment>
        <ToastContainer position="bottom-right" newestOnTop rtl={false} />
        <NavBar user={this.state.user} onLogout={this.handleLogout} />
        <main role="main" className="container">
          <div style={mt} className="starter-template">
            <Route
              path="/"
              exact
              render={props => (
                <Home
                  players={this.state.players}
                  gamescount={this.state.games.length}
                  mostgamer={this.state.mostgames.name}
                  mostgamercount={this.state.mostgames.games_total}
                  bestplayer={this.state.bestplayer.name}
                  bestplayerratio={this.state.bestplayer.games_win_lost}
                  rankedplayerscount={this.state.playersranked.length}
                  user={this.state.user}
                  {...props}
                />
              )}
            />
            <Route
              path="/games"
              exact
              render={props => {
                if (!this.state.user.name) return <Redirect to="/" />;
                return (
                  <Games
                    games={this.state.games}
                    user={this.state.user}
                    {...props}
                  />
                );
              }}
            />
            <Route
              path="/ranking"
              exact
              render={props => {
                if (!this.state.user.name) return <Redirect to="/" />;
                return (
                  <Ranking
                    playersranked={this.state.playersranked}
                    playersunranked={this.state.playersunranked}
                    user={this.state.user}
                    {...props}
                  />
                );
              }}
            />
            <Route
              path="/addgame"
              exact
              render={props => {
                if (!this.state.user.name) return <Redirect to="/" />;
                return (
                  <AddGameForm2
                    playernames={this.state.playernames}
                    onNewGame={this.handleNewGame}
                    {...props}
                  />
                );
              }}
            />
            <Route
              path="/myadminpage"
              exact
              render={props => {
                if (!this.state.user.isAdmin) return <Redirect to="/" />;
                return <MyAdminPage {...props} />;
              }}
            />
            <Route
              path="/register"
              exact
              render={props => (
                <RegisterForm onNewUser={this.handleNewUser} {...props} />
              )}
            />
            <Route
              path="/login"
              exact
              render={props => (
                <LoginForm onLogin={this.handleLogin} {...props} />
              )}
            />
            <Route
              path="/claimplayeridform"
              exact
              render={props => {
                if (!this.state.user.name) return <Redirect to="/" />;
                return (
                  <ClaimPlayerIdForm
                    user={this.state.user}
                    players={this.state.players}
                    onLogout={this.handleLogout}
                    {...props}
                  />
                );
              }}
            />
            <Route
              path="/profile"
              exact
              render={props => {
                if (!this.state.user.name) return <Redirect to="/" />;
                return <Profile {...props} />;
              }}
            />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
