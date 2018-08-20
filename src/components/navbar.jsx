import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

let defaultsytle = { fontSize: 20 };
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark navbar-fixed-top">
        <a className="navbar-brand" href="">
          r21Billard
        </a>
        <span class="badge badge-light">{this.props.totalGames}</span>
        <button
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
