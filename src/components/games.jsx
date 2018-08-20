import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Game from './game';
import { getGames } from '../services/fakeGameService';

class Games extends Component {
  state = {
    games: getGames()
  };

  render() {
    const { length: gamescount } = this.state.games;

    if (gamescount === 0)
      return <p className="text-center">No Games in Database</p>;

    return (
      <React.Fragment>
        <p className="text-left">{gamescount} Game(s) in the Database.</p>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">
                <p>#</p>
              </th>
              <th scope="col">
                <p className="text-right">Player</p>
              </th>
              <th scope="col" colSpan="2">
                <p className="text-center">Score</p>
              </th>
              <th scope="col">
                <p className="text-left">Player</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.games.map(game => (
              <Game
                key={game._id}
                _id={game._id}
                playerA={game.playerA}
                playerB={game.playerB}
                scoreplayerA={game.scoreplayerA}
                scoreplayerB={game.scoreplayerB}
              />
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Games;
