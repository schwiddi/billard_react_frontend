import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardSubtitle } from 'reactstrap';

export default class MostGamesCard extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props &&
          this.props.mostgamer &&
          this.props.mostgamercount && (
            <Card>
              <CardBody>
                <CardTitle>{this.props.mostgamer}</CardTitle>
                <CardSubtitle>
                  has the most games played on the table with{' '}
                  {this.props.mostgamercount}
                </CardSubtitle>
              </CardBody>
            </Card>
          )}
      </React.Fragment>
    );
  }
}
