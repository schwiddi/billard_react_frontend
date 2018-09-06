import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Game from './game';

class Games extends Component {
  render() {
    const { length: gamesCount } = this.props.games;
    const { onDelete, games } = this.props;

    if (gamesCount === 0)
      return <p className="text-center m-1">No Games in Database</p>;

    const pagedGames = games;

    return (
      <React.Fragment>
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
            {pagedGames.map(game => (
              <Game key={game._id} onDelete={onDelete} game={game} />
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Games;
