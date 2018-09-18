import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PlayerRanked from './playerranked';
import PlayerUnranked from './playerunranked';

class Ranking extends Component {
  render() {
    const { playersunranked, playersranked } = this.props;

    return (
      <React.Fragment>
        <h2>ranked...</h2>
        <p>wanna land here... play more...</p>
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
            {playersranked.map((player, index) => (
              <PlayerRanked key={player.id} player={player} index={index} />
            ))}
          </tbody>
        </table>
        <h2>others...</h2>
        <table className="table table-hover">
          <thead>
            <tr>
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
            {playersunranked.map((player, index) => (
              <PlayerUnranked key={player.id} player={player} index={index} />
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Ranking;
