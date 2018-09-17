import React, { Component } from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';

export default class MostGamesCard extends Component {
  // static getDerivedStateFromProps = () => {
  // let players = this.props.players;
  // function compare(a, b) {
  //   if (a.games_total < b.games_total) return 1;
  //   if (a.games_total > b.games_total) return -1;
  //   return 0;
  // }
  // players.sort(compare);
  // let mostgames = players[Object.keys(players)[0]];
  // this.setState({ mostgames });
  // };

  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>{}</CardTitle>
        </CardBody>
      </Card>
    );
  }
}
