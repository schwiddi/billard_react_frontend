import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

class NewPlayer extends Component {
  state = {
    newplayer: {
      name: ''
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const newplayer = { ...this.state };
    newplayer[input.name] = input.value;
    this.setState({ newplayer });
  };

  handleSubmit = () => {
    this.props.onNewPlayer(this.state.newplayer.name);
  };

  render() {
    return (
      <React.Fragment>
        <label htmlFor="newplayer">new player:</label>
        <InputGroup>
          <Input
            id="name"
            type="text"
            className="form-control"
            placeholder="new player"
            autoFocus
            value={this.state.newplayer.name}
            onChange={this.handleChange}
            name="name"
          />
          <InputGroupAddon addonType="append">
            <Button
              type="button"
              color="success"
              onClick={() => this.handleSubmit()}
            >
              save
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </React.Fragment>
    );
  }
}

export default NewPlayer;
