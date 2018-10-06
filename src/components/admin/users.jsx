import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Table } from 'reactstrap';
import User from './user';

class Users extends Component {
  render() {
    const { users } = this.props;
    return (
      <React.Fragment>
        {this.props.users && (
          <Table hover responsive>
            <thead>
              <tr>
                <th>id</th>
                <th>playerid</th>
                <th>name</th>
                <th>email</th>
                <th>ts_insert</th>
                <th>ts_update</th>
                <th>ts_lastlogin</th>
                <th>isAdmin</th>
                <th>canAddGame</th>
                <th>isApproved</th>
                <th>claimedPlayerId</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <User key={user.id} user={user} index={index} />
              ))}
            </tbody>
          </Table>
        )}
      </React.Fragment>
    );
  }
}

export default Users;
