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

axios.interceptors.response.use(null, error => {
  toast.error('Something went wrong....');
  return Promise.reject(error);
});

const endPoint = 'http://schwiddi.internet-box.ch:3001/api/v1/';
// const endPoint = 'http://localhost:3001/api/v1/';

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

  handleNewGame = async newgame => {
    // const newgame = {
    //   playerA: 'zzz',
    //   playerB: 'ffhhf',
    //   scoreplayerA: 0,
    //   scoreplayerB: 1
    // };

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
              render={props => <Players {...props} />}
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
