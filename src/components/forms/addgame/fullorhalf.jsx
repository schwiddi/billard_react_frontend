import React, { Component } from 'react';
import { Button } from 'reactstrap';

class FullOrHalf extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>who had the full balls? :)</h2>

        {this.props.selectedplayers.map((playername, index) => (
          <Button
            key={index}
            type="button"
            value={playername}
            id={playername}
            color="primary"
            size="lg"
            onClick={() => this.props.onSelectFull(playername)}
          >
            {playername}
          </Button>
        ))}
      </React.Fragment>
    );
  }
}

export default FullOrHalf;
