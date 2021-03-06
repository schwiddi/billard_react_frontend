import React, { Component } from 'react';
import { Badge } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

let defaultsytle = { fontSize: 18 };

class Game extends Component {
  render() {
    const { user } = this.props;
    return (
      <tr>
        <th className="text-left" scope="row">
          {this.props.game.id}
        </th>
        <td className="text-right">
          {this.props.game.playerA === user.name && (
            <Badge color="primary">you</Badge>
          )}{' '}
          {this.props.game.playerA}
        </td>
        <td className="text-center" colSpan="2">
          {this.formatScore(this.props.game.scoreplayerA)}
          {this.formatScore(this.props.game.scoreplayerB)}
        </td>
        <td className="text-left">
          {this.props.game.playerB}{' '}
          {this.props.game.playerB === user.name && (
            <Badge color="primary">you</Badge>
          )}
        </td>
      </tr>
    );
  }

  formatScore(score) {
    if (score === 1) {
      return (
        <span style={defaultsytle} className="badge badge-success">
          {score}
        </span>
      );
    } else if (score === 0) {
      return (
        <span style={defaultsytle} className="badge badge-secondary">
          {score}
        </span>
      );
    } else {
      return (
        <span style={defaultsytle} className="badge">
          {score}
        </span>
      );
    }
  }
}

export default Game;
