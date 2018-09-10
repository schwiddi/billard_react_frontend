import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Player extends Component {
  render() {
    return (
      <tr>
        <td>
          <p className="text-left">{this.props.player.id}</p>
        </td>
        <td>
          <p className="text-left">{this.props.player.name}</p>
        </td>
      </tr>
    );
  }
}

export default Player;
