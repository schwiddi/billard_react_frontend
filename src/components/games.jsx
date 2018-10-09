import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Table } from 'reactstrap';
import Game from './game';

class Games extends Component {
  render() {
    const { games } = this.props;

    return (
      <React.Fragment>
        <Table hover responsive size="sm">
          <thead>
            <tr>
              <th className="text-left">id</th>
              <th className="text-right">Player A</th>
              <th className="text-center" colSpan="2">
                Score
              </th>
              <th className="text-left">Player B</th>
            </tr>
          </thead>
          <tbody>
            {games.map(game => (
              <Game key={game.id} game={game} />
            ))}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}

export default Games;
