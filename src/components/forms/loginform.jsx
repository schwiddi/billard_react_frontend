import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';

class LoginForm extends Component {
  state = {
    loggedin: '',
    user: {
      email: '',
      password: ''
    }
  };

  componentDidMount = () => {
    const loggedin = 'false';
    this.setState({ loggedin });
  };

  handleChange = ({ currentTarget: input }) => {
    const user = { ...this.state.user };
    user[input.name] = input.value;
    this.setState({ user });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const ret = await this.props.onLogin(this.state.user);
    if (ret) {
      const loggedin = 'true';
      this.setState({ loggedin });
      setTimeout(() => {
        this.props.history.push('/');
      }, 5000);
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.loggedin &&
          this.state.loggedin !== 'true' && (
            <div>
              <h1>Login</h1>
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
            </div>
          )}
        {this.state.loggedin &&
          this.state.loggedin !== 'false' && (
            <div>
              <h1>Login</h1>
              <p>you are logged in now</p>
            </div>
          )}
      </React.Fragment>
    );
  }
}

export default withRouter(LoginForm);
