import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

let defaultsytle = { fontSize: 18 };

class Game extends Component {
  state = {
    _id: this.props._id,
    playerA: this.props.playerA,
    playerB: this.props.playerB,
    scoreplayerA: this.props.scoreplayerA,
    scoreplayerB: this.props.scoreplayerB
  };

  render() {
    return (
      <tr onClick={() => this.props.onDelete(this.props._id)}>
        <td>
          <p className="text-right">{'...' + this.state._id.slice(-3)}</p>
        </td>
        <td>
          <p className="text-right">{this.state.playerA}</p>
        </td>
        <td>
          <p className="text-right">
            {this.formatScore(this.state.scoreplayerA)}
          </p>
        </td>
        <td>
          <p className="text-left">
            {this.formatScore(this.state.scoreplayerB)}
          </p>
        </td>
        <td>
          <p className="text-left">{this.state.playerB}</p>
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
