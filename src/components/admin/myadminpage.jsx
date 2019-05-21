import React, { Component } from 'react';
import axios from 'axios';
import Users from './users';
import { toast } from 'react-toastify';

const endPoint = 'https://r21.schwiddi.surf/api/v1/';
// const endPoint = 'http://localhost:3001/api/v1/';

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

  async handleApprove(userid) {
    try {
      const object = { userid: userid };
      await axios.post(endPoint + 'approveuser', object);
    } catch (error) {
      toast.error('error... page will be reloaded..', {
        position: 'bottom-right',
        autoClose: true,
        pauseOnHover: false,
        closeOnClick: false
      });

      setTimeout(() => {
        window.location = '/';
      }, 5000);
    }
  }

  async handlecanAddGame(userid) {
    try {
      const object = { userid: userid };
      await axios.post(endPoint + 'switchcanaddgame', object);
    } catch (error) {
      toast.error('error... page will be reloaded..', {
        position: 'bottom-right',
        autoClose: true,
        pauseOnHover: false,
        closeOnClick: false
      });

      setTimeout(() => {
        window.location = '/';
      }, 5000);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Users
          users={this.state.users}
          onApprove={this.handleApprove}
          oncanAddGame={this.handlecanAddGame}
        />
      </React.Fragment>
    );
  }
}
