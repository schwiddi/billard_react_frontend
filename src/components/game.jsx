import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

let defaultsytle = { fontSize: 18 };

class Game extends Component {
  render() {
    return (
      <tr onClick={() => this.props.onDelete(this.props.game.id)}>
        <td>
          <p className="text-left">{this.props.game.id}</p>
        </td>
        <td>
          <p className="text-right">{this.props.game.playerA}</p>
        </td>
        <td colSpan="2">
          <p className="text-center">
            {this.formatScore(this.props.game.scoreplayerA)}
            <span style={defaultsytle}>
              <strong className="m-1">:</strong>
            </span>
            {this.formatScore(this.props.game.scoreplayerB)}
          </p>
        </td>
        <td>
          <p className="text-left">{this.props.game.playerB}</p>
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
