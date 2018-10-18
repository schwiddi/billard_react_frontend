import React, { Component } from 'react';
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import PlayerRanked from './playerranked';
import PlayerUnranked from './playerunranked';

class Ranking extends Component {
  render() {
    const { playersunranked, playersranked, user } = this.props;

    return (
      <React.Fragment>
        <h2>ranked...</h2>
        <p>wanna land here... play more...</p>
        <Table hover responsive size="sm">
          <thead>
            <tr>
              <th scope="col" className="text-left">
                Rank
              </th>
              <th scope="col" className="text-left">
                Name
              </th>
              <th scope="col" className="text-center">
                Wins
              </th>
              <th scope="col" className="text-center">
                Total
              </th>
              <th scope="col" className="text-center">
                %
              </th>
            </tr>
          </thead>
          <tbody>
            {playersranked.map((player, index) => (
              <PlayerRanked
                key={player.id}
                playerid={player.id}
                player={player}
                index={index}
                user={user}
              />
            ))}
          </tbody>
        </Table>
        <h2>others...</h2>
        <Table hover responsive size="sm">
          <thead>
            <tr>
              <th scope="col" className="text-left">
                Name
              </th>
              <th scope="col" className="text-center">
                Wins
              </th>
              <th scope="col" className="text-center">
                Total
              </th>
              <th scope="col" className="text-center">
                %
              </th>
            </tr>
          </thead>
          <tbody>
            {playersunranked.map((player, index) => (
              <PlayerUnranked
                key={player.id}
                player={player}
                index={index}
                user={user}
              />
            ))}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}

export default Ranking;
