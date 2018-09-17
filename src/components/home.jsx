import React, { Component } from 'react';
import { CardColumns } from 'reactstrap';
import TotalGamesCard from './totalgamescard';
import TotalPlayersCard from './totalplayerscard';
import MostGamesCard from './mostgamescard';
import BestPlayerCard from './bestplayercard';
import Jumbo from './jumbotron';

import 'bootstrap/dist/css/bootstrap.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbo />
        <CardColumns>
          <TotalGamesCard games={this.props.games} />
          <TotalPlayersCard players={this.props.players} />
          <MostGamesCard
            mostgamer={this.props.mostgamer}
            mostgamercount={this.props.mostgamercount}
          />
          <BestPlayerCard
            bestplayer={this.props.bestplayer}
            bestplayerratio={this.props.bestplayerratio}
          />
        </CardColumns>
      </div>
    );
  }
}

export default Home;
