import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Player from './player';

class Players extends Component {
  render() {
    const { players } = this.props;

    return (
      <React.Fragment>
        <h2>Players with more then 20 Games</h2>
        <p>only these players are getting ranked...</p>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">
                <p className="text-left">Rank</p>
              </th>
              <th scope="col">
                <p className="text-left">Name</p>
              </th>
              <th scope="col">
                <p className="text-center">Total</p>
              </th>
              <th scope="col">
                <p className="text-center">Wins</p>
              </th>
              <th scope="col">
                <p className="text-center">Losses</p>
              </th>
              <th scope="col">
                <p className="text-center">Win %</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <Player key={player.id} player={player} index={index} />
            ))}
          </tbody>
        </table>
        <h2>Players with less</h2>
        <p>these have not enough games to get to the ranking...</p>
      </React.Fragment>
    );
  }
}

export default Players;
