import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardSubtitle } from 'reactstrap';

export default class TotalGamesCard extends Component {
  render() {
    const totalgamescount = this.props.games.length;
    return (
      <Card>
        <CardBody>
          <CardTitle>{totalgamescount}</CardTitle>
          <CardSubtitle>Games stored in the Database...</CardSubtitle>
        </CardBody>
      </Card>
    );
  }
}
