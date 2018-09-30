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
        <td>
          <p className="text-left">{this.props.player.name}</p>
        </td>
        <td>
          <p className="text-center">{this.props.player.games_won}</p>
        </td>
        <td>
          <p className="text-center">{this.props.player.games_total}</p>
        </td>
        <td>
          <p className="text-center">
            {parseFloat(this.props.player.games_win_lost).toFixed(1)}%
          </p>
        </td>
      </tr>
    );
  }
}

export default PlayerRanked;
