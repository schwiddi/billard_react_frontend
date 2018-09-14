import React, { Component } from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';

export default class TotalGamesCard extends Component {
  render() {
    const totalgamescount = this.props.games.length;
    return (
      <Card>
        <CardBody>
          <CardTitle>Games: {totalgamescount}</CardTitle>
        </CardBody>
      </Card>
    );
  }
}
