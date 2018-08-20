import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Game from './game';

class Games extends Component {
  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">
                <p>#</p>
              </th>
              <th scope="col">
                <p className="text-right">Player</p>
              </th>
              <th scope="col" colSpan="2">
                <p className="text-center">Score</p>
              </th>
              <th scope="col">
                <p className="text-left">Player</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <Game />
            <Game />
            <Game />
            <Game />
            <Game />
            <Game />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Games;
