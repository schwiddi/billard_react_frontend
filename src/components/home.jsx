import React, { Component } from 'react';
import { CardColumns } from 'reactstrap';
import TotalGamesCard from './cards/totalgamescard';
import TotalPlayersCard from './cards/totalplayerscard';
import MostGamesCard from './cards/mostgamescard';
import BestPlayerCard from './cards/bestplayercard';
import RankedPlayersCard from './cards/rankedplayerscard';
import Jumbo from './jumbotron';

import 'bootstrap/dist/css/bootstrap.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbo />
        <CardColumns>
          <BestPlayerCard
            bestplayer={this.props.bestplayer}
            bestplayerratio={this.props.bestplayerratio}
          />
          <MostGamesCard
            mostgamer={this.props.mostgamer}
            mostgamercount={this.props.mostgamercount}
          />
          <TotalGamesCard games={this.props.gamescount} />
          <TotalPlayersCard players={this.props.players} />
          <RankedPlayersCard
            rankedplayerscount={this.props.rankedplayerscount}
          />
        </CardColumns>
      </div>
    );
  }
}

export default Home;
