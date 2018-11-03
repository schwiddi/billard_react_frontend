import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Select extends Component {
  selected(playername) {
    const tmp = this.props.selectedplayers;
    const tmp2 = tmp.filter(function(item) {
      return playername.indexOf(item) >= -1;
    });
    if (tmp2) {
      return 'success';
    } else {
      return 'secondary';
    }
  }
  render() {
    return (
      <React.Fragment>
        <h2>select two players:</h2>
        {this.props.playernames.map((playername, index) => (
          <Button
            key={index}
            type="button"
            value={playername}
            id={playername}
            color={() => this.selected(playername)}
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
