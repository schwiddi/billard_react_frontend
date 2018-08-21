import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

let defaultsytle = { fontSize: 15 };
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark navbar-fixed-top">
        <a className="navbar-brand" href="">
          r21Billard
        </a>
        <span style={defaultsytle} className="badge badge-pill badge-light m-2">
          Games: {this.props.totalGames}
        </span>
        <span style={defaultsytle} className="badge badge-pill badge-light m-2">
          Players: {this.props.totalPlayers}
        </span>
        <button
          style={defaultsytle}
          onClick={this.props.onNew}
          className="btn btn-primary btn-sm m-2"
        >
          <strong>Add</strong>
        </button>
      </nav>
    );
  }
}

export default NavBar;
