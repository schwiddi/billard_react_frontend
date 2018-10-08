import React, { Component } from 'react';
import axios from 'axios';
import Users from './users';
import Unapproved from './unapproved';
import { toast } from 'react-toastify';

const endPoint = 'http://localhost:3001/api/v1/';

export default class MyAdminPage extends Component {
  state = {
    users: [],
    unApprovedUsers: []
  };

  getUnApprovedUsers(users) {
    try {
      const unApprovedUsers = users.filter(item => item.isApproved === 0);
      return unApprovedUsers;
    } catch (error) {
      return null;
    }
  }

  componentDidMount() {
    try {
      this.updateStates();
    } catch (error) {}
  }

  async updateStates() {
    try {
      const { data: users } = await axios.get(endPoint + 'users');
      this.setState({ users });
      const unApprovedUsers = this.getUnApprovedUsers(this.state.users);
      this.setState({ unApprovedUsers });
    } catch (error) {}
  }

  async handleApprove(userid) {
    try {
      const object = { userid: userid };
      await axios.post(endPoint + 'approveuser', object);
      toast.success('Approved', {
        position: 'bottom-right',
        autoClose: true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true
      });
    } catch (error) {
      toast.error('error', {
        position: 'bottom-right',
        autoClose: false,
        closeOnClick: true
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>users</h1>
        <Users users={this.state.users} />
        <h1>unapproved</h1>
        <Unapproved
          unApprovedUsers={this.state.unApprovedUsers}
          onApprove={this.handleApprove}
        />
      </React.Fragment>
    );
  }
}
