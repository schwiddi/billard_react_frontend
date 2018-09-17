import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardSubtitle } from 'reactstrap';

export default class BestPlayerCard extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props &&
          this.props.bestplayer &&
          this.props.bestplayerratio && (
            <Card>
              <CardBody>
                <CardTitle>{this.props.bestplayer}</CardTitle>
                <CardSubtitle>
                  has the best Ratio with{' '}
                  {parseFloat(this.props.bestplayerratio).toFixed(2)}%
                </CardSubtitle>
              </CardBody>
            </Card>
          )}
      </React.Fragment>
    );
  }
}
