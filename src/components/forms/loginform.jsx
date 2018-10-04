import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';

class LoginForm extends Component {
  state = {
    user: {
      email: '',
      password: ''
    }
  };

  componentDidMount = () => {};

  handleChange = ({ currentTarget: input }) => {
    const user = { ...this.state.user };
    user[input.name] = input.value;
    this.setState({ user });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const ret = await this.props.onLogin(this.state.user);
    if (ret) {
      window.location = '/';
    }
  };

  render() {
    return (
      <React.Fragment>
        <h1>login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">email</label>
            <input
              id="email"
              value={this.state.user.email}
              type="email"
              className="form-control"
              onChange={this.handleChange}
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">password</label>
            <input
              value={this.state.user.password}
              id="password"
              type="password"
              className="form-control"
              onChange={this.handleChange}
              name="password"
            />
          </div>
          <Button color="primary">Login</Button>
        </form>
      </React.Fragment>
    );
  }
}

export default withRouter(LoginForm);
