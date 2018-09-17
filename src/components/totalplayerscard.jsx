import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardSubtitle } from 'reactstrap';

export default class TotalPlayersCard extends Component {
  render() {
    const totalplayeerscount = this.props.players.length;
    return (
      <Card>
        <CardBody>
          <CardTitle>{totalplayeerscount}</CardTitle>
          <CardSubtitle>different Players...</CardSubtitle>
        </CardBody>
      </Card>
    );
  }
}
