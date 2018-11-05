import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Select extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>1. select players:</h2>
        {this.props.playernames.map((playername, index) => (
          <Button
            key={index}
            type="button"
            value={playername}
            id={playername}
            color="info"
            size="lg"
            onClick={() => this.props.onSelect(playername)}
          >
            {playername}
          </Button>
        ))}
        <p />
      </React.Fragment>
    );
  }
}

export default Select;
