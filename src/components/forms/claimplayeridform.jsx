import React, { Component } from 'react';

import { ListGroup, ListGroupItem } from 'reactstrap';

export default class ClaimePlayerId extends Component {
  state = {};

  onPlayerChosen = playerid => {
    console.log(playerid);
  };

  render() {
    const players = this.props.players;

    return (
      <React.Fragment>
        <h1>Claime Player ID</h1>
        <p>
          Here you can claim to be a player that has already played games on the
          famous r21.Billiard Table!
        </p>
        <p />
        <p>
          So here are all players, the grayed out have already been picked by a
          user..
        </p>
        <p />
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
                //onClick={this.onPlayerChosen(player.id)}
              >
                {player.name}
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </React.Fragment>
    );
  }
}
