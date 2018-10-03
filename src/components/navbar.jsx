import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
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
          <NavbarBrand tag={Link} to="/">
            r21Billard
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="mr-2" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={this.toggle} tag={Link} to="/">
                  Home
                </NavLink>
              </NavItem>
              {this.props.user.canAddGame === 1 && (
                <NavItem>
                  <NavLink onClick={this.toggle} tag={Link} to="/addgame">
                    New
                  </NavLink>
                </NavItem>
              )}
              <NavItem>
                <NavLink onClick={this.toggle} tag={Link} to="/games">
                  Games
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle} tag={Link} to="/ranking">
                  Ranking
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                {this.props.user.name && (
                  <DropdownToggle nav caret>
                    {this.props.user.name}
                  </DropdownToggle>
                )}
                {!this.props.user.name && (
                  <DropdownToggle nav caret>
                    User
                  </DropdownToggle>
                )}
                {this.props.user.name && (
                  <DropdownMenu right>
                    <DropdownItem onClick={this.toggle}>
                      Some User Site
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={this.toggle} tag={Link} to="/logout">
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                )}
                {!this.props.user.name && (
                  <DropdownMenu right>
                    <DropdownItem onClick={this.toggle} tag={Link} to="/login">
                      Login
                    </DropdownItem>
                    <DropdownItem
                      onClick={this.toggle}
                      tag={Link}
                      to="/register"
                    >
                      Register
                    </DropdownItem>
                  </DropdownMenu>
                )}
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
