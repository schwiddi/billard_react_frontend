import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Selected extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>selected players:</h2>
        {this.props.selectedplayers.map((playername, index) => (
          <Button
            key={index}
            type="button"
            value={playername}
            id={playername}
            color="info"
            size="lg"
            onClick={() => this.props.onDeSelect(playername)}
          >
            {playername}
          </Button>
        ))}
        <p />
      </React.Fragment>
    );
  }
}

export default Selected;
