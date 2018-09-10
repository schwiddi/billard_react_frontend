import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Game from './game';

class Games extends Component {
  render() {
    const { onDelete, games } = this.props;

    return (
      <React.Fragment>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">
                <p className="text-left">#</p>
              </th>
              <th scope="col">
                <p className="text-right">Player A</p>
              </th>
              <th scope="col" colSpan="2">
                <p className="text-center">Score</p>
              </th>
              <th scope="col">
                <p className="text-left">Player B</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {games.map(game => (
              <Game key={game.id} onDelete={onDelete} game={game} />
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Games;
