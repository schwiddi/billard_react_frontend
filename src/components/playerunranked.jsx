import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class PlayerUnranked extends Component {
  render() {
    return (
      <tr>
        <td className="text-left">{this.props.player.name}</td>
        <td className="text-center">{this.props.player.games_won}</td>
        <td className="text-center">{this.props.player.games_total}</td>
        <td className="text-center">
          {parseFloat(this.props.player.games_win_lost).toFixed(0)}%
        </td>
      </tr>
    );
  }
}

export default PlayerUnranked;
