import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class User extends Component {
  render() {
    const user = this.props.user;
    return (
      <tr>
        <th scope="row">{user.id}</th>
        <td>{user.playerid}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.ts_insert}</td>
        <td>{user.ts_update}</td>
        <td>{user.ts_lastlogin}</td>
        <td>{user.isAdmin}</td>
        <td>{user.canAddGame}</td>
        <td>{user.isApproved}</td>
        <td>{user.claimedPlayerId}</td>
      </tr>
    );
  }
}

export default User;
