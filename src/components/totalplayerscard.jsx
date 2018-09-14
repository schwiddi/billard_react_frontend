import React, { Component } from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';

export default class TotalPlayersCard extends Component {
  render() {
    const totalplayeerscount = this.props.players.length;
    return (
      <Card>
        <CardBody>
          <CardTitle>Players: {totalplayeerscount}</CardTitle>
        </CardBody>
      </Card>
    );
  }
}
