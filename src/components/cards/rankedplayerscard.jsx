import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardSubtitle } from 'reactstrap';

export default class RankedPlayersCard extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props &&
          this.props.rankedplayerscount !== 0 && (
            <Card>
              <CardBody>
                <CardTitle>{this.props.rankedplayerscount} Players</CardTitle>
                <CardSubtitle>had made it to the ranking...</CardSubtitle>
              </CardBody>
            </Card>
          )}
      </React.Fragment>
    );
  }
}
