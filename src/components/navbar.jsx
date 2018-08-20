import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

let defaultsytle = { fontSize: 20 };
class NavBar extends Component {
  render() {
    const { length: gamescount } = this.props.games;
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark navbar-fixed-top">
        <a className="navbar-brand" href="">
          r21Billard
        </a>
        <span style={defaultsytle} className="badge badge-success">
          {gamescount}
        </span>
        <button
          onClick={this.props.onNew}
          className="btn btn-primary btn-sm m-2"
        >
          <strong>New</strong>
        </button>
      </nav>
    );
  }
}

export default NavBar;
