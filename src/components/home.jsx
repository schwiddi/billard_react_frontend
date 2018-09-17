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
          <MostGamesCard
            mostgamer={this.props.mostgamer}
            mostgamercount={this.props.mostgamercount}
          />
        </CardColumns>
      </div>
    );
  }
}

export default Home;
