import React, { Component } from 'react';
import User from './user';
import 'bootstrap/dist/css/bootstrap.css';
import { Table } from 'reactstrap';

class Unapproved extends Component {
  render() {
    const { unApprovedUsers, onApprove } = this.props;
    return (
      <React.Fragment>
        <Table hover responsive>
          <thead>
            <tr>
              <th>id</th>
              <th>playerid</th>
              <th>name</th>
              <th>email</th>
              <th>isAdmin</th>
              <th>canAddGame</th>
              <th>isApproved</th>
              <th>claimedPlayerId</th>
            </tr>
          </thead>
          <tbody>
            {unApprovedUsers.map((user, index) => (
              <User
                key={user.id}
                user={user}
                index={index}
                onApprove={onApprove}
              />
            ))}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}

export default Unapproved;
