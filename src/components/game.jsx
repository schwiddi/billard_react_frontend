import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Game extends Component {
  state = {
    _id: '5b795dfcb0532cf66e87aa31',
    playerA: 'Bäsä',
    playerB: 'Schwiddi',
    scoreplayerA: 0,
    scoreplayerB: 1,
    date: '2018-08-19T12:09:32.152Z'
  };

  render() {
    return (
      <React.Fragment>
        <tr>
          <th scope="row">{this.state.keyid}</th>
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
      </React.Fragment>
    );
  }

  formatScore(score) {
    if (score === 1) {
      return <span className="badge badge-success">{score}</span>;
    } else if (score === 0) {
      return <span className="badge badge-secondary">{score}</span>;
    } else {
      return <span className="badge">{score}</span>;
    }
  }
}

export default Game;
