import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardSubtitle } from 'reactstrap';

export default class TotalGamesCard extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props &&
          this.props.games.length !== 0 && (
            <Card>
              <CardBody>
                <CardTitle>{this.props.games.length}</CardTitle>
                <CardSubtitle>Games stored in the Database...</CardSubtitle>
              </CardBody>
            </Card>
          )}
      </React.Fragment>
    );
  }
}
