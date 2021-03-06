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
            r21.Billiard
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="mr-2" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={this.toggle} tag={Link} to="/">
                  Home
                </NavLink>
              </NavItem>
              {this.props.user.name && (
                <React.Fragment>
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
                </React.Fragment>
              )}
              {!this.props.user.name && (
                <React.Fragment>
                  <NavItem>
                    <NavLink onClick={this.toggle} tag={Link} to="/register">
                      Register
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={this.toggle} tag={Link} to="/login">
                      Login
                    </NavLink>
                  </NavItem>
                </React.Fragment>
              )}

              {this.props.user.name && (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    {this.props.user.name}
                  </DropdownToggle>
                  <DropdownMenu right>
                    {/* <DropdownItem
                      onClick={this.toggle}
                      tag={Link}
                      to="/profile"
                    >
                      Profile
                    </DropdownItem> */}
                    {this.props.user.claimedPlayerId === 0 && (
                      <React.Fragment>
                        <DropdownItem
                          onClick={this.toggle}
                          tag={Link}
                          to="/claimplayeridform"
                        >
                          Claim Player ID
                        </DropdownItem>
                      </React.Fragment>
                    )}
                    {this.props.user.canAddGame === 1 && (
                      <DropdownItem
                        onClick={this.toggle}
                        tag={Link}
                        to="/addgame"
                      >
                        New Game
                      </DropdownItem>
                    )}

                    {this.props.user.isAdmin === 1 && (
                      <DropdownItem
                        onClick={this.toggle}
                        tag={Link}
                        to="/myadminpage"
                      >
                        Admin
                      </DropdownItem>
                    )}
                    <DropdownItem divider />
                    <DropdownItem onClick={this.props.onLogout}>
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
