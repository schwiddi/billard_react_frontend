import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="text-light" href="">
          r21 Billard
        </a>
      </nav>
    );
  }
}

export default NavBar;
