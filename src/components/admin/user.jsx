import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class User extends Component {
  render() {
    const user = this.props.user;
    return (
      <React.Fragment>
        {this.props.onApprove && (
          <tr onClick={() => this.props.onApprove(user.id)}>
            <th scope="row">{user.id}</th>
            <td>{user.playerid}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.isAdmin}</td>
            <td>{user.canAddGame}</td>
            <td>{user.isApproved}</td>
            <td>{user.claimedPlayerId}</td>
          </tr>
        )}
        {!this.props.onApprove && (
          <tr>
            <th scope="row">{user.id}</th>
            <td>{user.playerid}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.isAdmin}</td>
            <td>{user.canAddGame}</td>
            <td>{user.isApproved}</td>
            <td>{user.claimedPlayerId}</td>
          </tr>
        )}
      </React.Fragment>
    );
  }
}

export default User;
