import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class PlayerUnranked extends Component {
  render() {
    return (
      <tr>
        <td>
          <p className="text-left">{this.props.player.name}</p>
        </td>
        <td>
          <p className="text-center">{this.props.player.games_total}</p>
        </td>
        <td>
          <p className="text-center">{this.props.player.games_won}</p>
        </td>
        <td>
          <p className="text-center">{this.props.player.games_lost}</p>
        </td>
        <td>
          <p className="text-center">
            {parseFloat(this.props.player.games_win_lost).toFixed(2)}%
          </p>
        </td>
      </tr>
    );
  }
}

export default PlayerUnranked;
