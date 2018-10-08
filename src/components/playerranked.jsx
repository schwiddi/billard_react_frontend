import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class PlayerRanked extends Component {
  render() {
    let index = Number(this.props.index);
    const rank = index + 1;
    return (
      <tr>
        <th className="text-left" scope="row">
          {rank}
        </th>
        <td className="text-left">{this.props.player.name}</td>
        <td className="text-center">{this.props.player.games_won}</td>
        <td className="text-center">{this.props.player.games_total}</td>
        <td className="text-center">
          {parseFloat(this.props.player.games_win_lost).toFixed(1)}%
        </td>
      </tr>
    );
  }
}

export default PlayerRanked;
