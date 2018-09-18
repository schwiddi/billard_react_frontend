import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardSubtitle } from 'reactstrap';

export default class TotalGamesCard extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props &&
          this.props.gamescount !== 0 && (
            <Card>
              <CardBody>
                <CardTitle>{this.props.gamescount}</CardTitle>
                <CardSubtitle>games had been played...</CardSubtitle>
              </CardBody>
            </Card>
          )}
      </React.Fragment>
    );
  }
}
