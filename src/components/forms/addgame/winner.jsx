import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Winner extends Component {
  winnerbuttoncollor(playername) {
    if (this.props.selectedwinner === playername) {
      return 'senondary';
    } else {
      return 'primary';
    }
  }

  render() {
    return (
      <React.Fragment>
        <h2>Winner?:</h2>

        {this.props.selectedplayers.map((playername, index) => (
          <Button
            key={index}
            type="button"
            value={playername}
            id={playername}
            color={() => this.winnerbuttoncollor(playername)}
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

export default Winner;
