import React, { Component } from 'react';
import { Badge } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class PlayerUnranked extends Component {
  render() {
    const { user } = this.props;
    return (
      <tr>
        <td className="text-left">
          {this.props.player.name}{' '}
          {this.props.player.name === user.name && (
            <Badge color="primary">you</Badge>
          )}
        </td>
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
