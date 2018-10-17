import React, { Component } from 'react';
import Toggle from 'react-toggle';

import './users.css';
import { Table } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';

class Users extends Component {
  render() {
    const { users } = this.props;
    return (
      <React.Fragment>
        <h1>users</h1>
        {this.props.users && (
          <Table hover responsive size="sm">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>isAdmin</th>
                <th>canAddGame</th>
                <th>isApproved</th>
                <th>claimedPlayerId</th>
                <th>playerid</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.isAdmin}</td>
                  <td>
                    <Toggle
                      defaultChecked={Boolean(user.canAddGame)}
                      onChange={() => this.props.oncanAddGame(user.id)}
                    />
                  </td>
                  <td>
                    <Toggle
                      defaultChecked={Boolean(user.isApproved)}
                      onChange={() => this.props.onApprove(user.id)}
                    />
                  </td>

                  <td>{user.claimedPlayerId}</td>
                  <td>{user.playerid}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </React.Fragment>
    );
  }
}

export default Users;

// onClick={() => this.props.onApprove(user.id)}
