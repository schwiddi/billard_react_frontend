import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Winner extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>winner?</h2>
        {this.props.selectedplayers.map((playername, index) => (
          <Button
            key={index}
            type="button"
            value={playername}
            id={playername}
            color="info"
            size="lg"
            onClick={() => this.props.onSelectWinner(playername)}
          >
            {playername}
          </Button>
        ))}
        <p />
      </React.Fragment>
    );
  }
}

export default Winner;
