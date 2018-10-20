import React, { Component } from 'react';
import axios from 'axios';

import { ListGroup, ListGroupItem, Button } from 'reactstrap';

// const endPoint = 'http://schwiddi.internet-box.ch:3001/api/v1/';
const endPoint = 'http://localhost:3001/api/v1/';

export default class ClaimePlayerId extends Component {
  state = {
    selected: false,
    claimedplayerid: '',
    playername: '',
    submitted: false
  };

  onPlayerChosen = (id, name) => {
    const claimedplayerid = id;
    this.setState({ claimedplayerid });

    const playername = name;
    this.setState({ playername });

    const selected = true;
    this.setState({ selected });
  };

  onSubmit = async () => {
    const submitted = true;
    this.setState({ submitted });

    const req = { claimedplayerid: this.state.claimedplayerid };
    await axios.post(endPoint + 'claim', req);

    setTimeout(() => {
      this.props.onLogout();
    }, 12000);
  };

  render() {
    const players = this.props.players;

    return (
      <React.Fragment>
        <h1>Claim Player ID</h1>
        <p>
          Here you can claim to be a player that has already played games on the
          famous r21.Billiard Table!
        </p>
        <p />
        {this.state &&
          this.state.submitted === false && (
            <p>
              So here are all players, the grayed out have already been picked
              by a user..
            </p>
          )}
        {this.state &&
          this.state.submitted === true && (
            <p>
              you have chosen: <strong>{this.state.playername}</strong>
              ... after this has been approved you will see the result.. in
              order for the app to work fine will log you out.. sorry
            </p>
          )}
        <p />
        {this.state &&
          this.state.submitted === false && (
            <ListGroup>
              {players.map(player => {
                if (player.user_id)
                  return (
                    <ListGroupItem key={player.id} disabled>
                      {player.name}
                    </ListGroupItem>
                  );
                return (
                  <ListGroupItem
                    key={player.id}
                    action
                    tag="button"
                    onClick={() => this.onPlayerChosen(player.id, player.name)}
                  >
                    {player.name}
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          )}
        <p />
        <p />
        {this.state &&
          this.state.selected &&
          !this.state.submitted && (
            <Button color="primary" onClick={this.onSubmit}>
              Claim to be: {this.state.playername}
            </Button>
          )}
      </React.Fragment>
    );
  }
}
