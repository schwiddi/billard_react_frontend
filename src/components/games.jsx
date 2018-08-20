import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Game from './game';
import { getGames } from '../services/fakeGameService';

class Games extends Component {
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
    const { length: gamescount } = this.state.games;

    if (gamescount === 0)
      return <p className="text-center m-1">No Games in Database</p>;

    return (
      <React.Fragment>
        <span className="text-left m-1">{gamescount} Game(s) in Database.</span>
        <span className="text-right m-1">
          <button
            onClick={this.handleNew}
            className="btn btn-primary btn-sm m-1"
          >
            New
          </button>
        </span>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">
                <p className="text-right">#</p>
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
              <Game key={game._id} onDelete={this.handleDelete} game={game} />
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Games;
