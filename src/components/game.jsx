import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Game extends Component {
  state = {
    _id: '1',
    playerA: 'Bäsä',
    playerB: 'Schwiddi',
    scoreplayerA: 0,
    scoreplayerB: 1,
    date: '2018-08-19T12:09:32.152Z'
  };

  render() {
    return (
      <tr>
        <td>
          <p>{this.state._id}</p>
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
        <span style={{ fontSize: 20 }} className="badge badge-success">
          {score}
        </span>
      );
    } else if (score === 0) {
      return (
        <span style={{ fontSize: 20 }} className="badge badge-secondary">
          {score}
        </span>
      );
    } else {
      return (
        <span style={{ fontSize: 20 }} className="badge">
          {score}
        </span>
      );
    }
  }
}

export default Game;
