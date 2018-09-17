import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardSubtitle } from 'reactstrap';

export default class TotalPlayersCard extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props &&
          this.props.players.length !== 0 && (
            <Card>
              <CardBody>
                <CardTitle>{this.props.players.length}</CardTitle>
                <CardSubtitle>different Players...</CardSubtitle>
              </CardBody>
            </Card>
          )}
      </React.Fragment>
    );
  }
}
