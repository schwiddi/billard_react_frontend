import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="navbar navbar-expand-md navbar-dark bg-dark navbar-fixed-top">
          <NavbarBrand href="/">r21Billard</NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="mr-2" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Games</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Players</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Stats</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.props.onNew} href="#">
                  Add
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
