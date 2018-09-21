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
                <CardSubtitle>
                  have made it to the ranking so far...
                </CardSubtitle>
              </CardBody>
            </Card>
          )}
      </React.Fragment>
    );
  }
}
