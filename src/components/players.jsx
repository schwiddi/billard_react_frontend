import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Player from './player';

class Players extends Component {
  render() {
    const { players } = this.props;

    return (
      <React.Fragment>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">
                <p className="text-left">#</p>
              </th>
              <th scope="col">
                <p className="text-left">Name</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {players.map(player => (
              <Player key={player.id} player={player} />
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Players;
