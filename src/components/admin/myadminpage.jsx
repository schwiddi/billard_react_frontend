import React, { Component } from 'react';
import axios from 'axios';
import Users from './users';

const endPoint = 'http://localhost:3001/api/v1/';

export default class MyAdminPage extends Component {
  state = {
    users: []
  };

  async componentDidMount() {
    try {
      const { data: users } = await axios.get(endPoint + 'users');
      this.setState({ users });
    } catch (error) {}
  }

  render() {
    return (
      <React.Fragment>
        <h1>users</h1>
        <Users users={this.state.users} />
      </React.Fragment>
    );
  }
}
