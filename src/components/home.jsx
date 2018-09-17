import React, { Component } from 'react';
import { CardColumns } from 'reactstrap';
import TotalGamesCard from './totalgamescard';
import TotalPlayersCard from './totalplayerscard';
import MostGamesCard from './mostgamescard';

import 'bootstrap/dist/css/bootstrap.css';

class Home extends Component {
  render() {
    return (
      <div>
        <CardColumns>
          <TotalGamesCard games={this.props.games} />
          <TotalPlayersCard players={this.props.players} />
          <MostGamesCard players={this.props.players} />
        </CardColumns>
      </div>
    );
  }
}

export default Home;
