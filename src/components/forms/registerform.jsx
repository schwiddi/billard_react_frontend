import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';

class RegisterForm extends Component {
  state = {
    newuser: {
      name: '',
      email: '',
      password: ''
    },
    successful: ''
  };

  componentDidMount = () => {
    const successful = 'false';
    this.setState({ successful });
  };

  handleChange = ({ currentTarget: input }) => {
    const newuser = { ...this.state.newuser };
    newuser[input.name] = input.value;
    this.setState({ newuser });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const ret = await this.props.onNewUser(this.state.newuser);
    if (ret) {
      const successful = 'true';
      this.setState({ successful });
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.successful &&
          this.state.successful !== 'true' && (
            <div>
              <h1>register</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">name</label>
                  <input
                    id="name"
                    type="text"
                    className="form-control"
                    autoFocus
                    value={this.state.newuser.name}
                    onChange={this.handleChange}
                    name="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">email</label>
                  <input
                    id="email"
                    value={this.state.newuser.email}
                    type="email"
                    className="form-control"
                    onChange={this.handleChange}
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">password</label>
                  <input
                    value={this.state.newuser.password}
                    id="password"
                    type="password"
                    className="form-control"
                    onChange={this.handleChange}
                    name="password"
                  />
                </div>
                <Button color="primary" size="lg">
                  register
                </Button>
              </form>
            </div>
          )}
        {this.state.successful &&
          this.state.successful !== 'false' && (
            <div>
              <h1>Registered</h1>
              <p>
                you are now registered, please wait until someone approved
                this...
              </p>
              <p>maybe you'll see a shooting star when the time comes!!</p>
            </div>
          )}
      </React.Fragment>
    );
  }
}

export default withRouter(RegisterForm);
