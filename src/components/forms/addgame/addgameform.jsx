import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Container, Row, Button, ButtonGroup } from 'reactstrap';
import { toast } from 'react-toastify';
import Select from './select';
import Selected from './selected';
import Winner from './winner';
import Started from './started';
import FullOrHalf from './fullorhalf';
import NewPlayer from './newplayer';

class AddGameForm extends Component {
  state = {
    page: 0,
    pagelast: 3,
    playernames: [],
    selectedplayers: [],
    selectedwinner: '',
    selectedbeginner: '',
    selectedfull: '',
    newgame: {},
    newplayerform: false
  };

  componentDidMount = () => {
    const { playernames } = this.props;
    this.setState({ playernames });
  };

  handleSubmit = event => {
    // event.preventDefault();
    // this.props.onNewGame(this.state.newgame);
    // const clearState = {
    //   playerA: '',
    //   scoreplayerA: '',
    //   playerB: '',
    //   scoreplayerB: ''
    // };
    // this.setState({ newgame: clearState });
    // this.props.history.push('/games');
  };

  handlePageInc = () => {
    if (this.state.page !== this.state.pagelast) {
      let tmp = this.state.page;
      tmp++;
      this.setState({ page: tmp });
    }
  };

  handlePageDec = () => {
    let tmp = this.state.page;
    tmp--;
    this.setState({ page: tmp });
  };

  handleSelect = player => {
    const tmp = this.state.selectedplayers;
    const plcnt = tmp.length;
    if (plcnt >= 2) {
      toast.error('only two allowed', {
        position: 'bottom-right',
        autoClose: true,
        closeOnClick: true
      });
    } else {
      const newselectedplayers = this.state.selectedplayers;
      newselectedplayers.push(player);
      this.setState({ selectedplayers: newselectedplayers });

      const tmp = this.state.playernames;
      const newpl = tmp.filter(function(item) {
        return player.indexOf(item) !== 0;
      });
      this.setState({ playernames: newpl });
    }
  };

  handleDeSelect = player => {
    const tmp = this.state.selectedplayers;
    const redselpl = tmp.filter(function(item) {
      return player.indexOf(item) !== 0;
    });
    this.setState({ selectedplayers: redselpl });

    const tmp2 = this.state.playernames;
    tmp2.push(player);
    this.setState({ playernames: tmp2 });

    this.setState({
      selectedwinner: '',
      selectedbeginner: '',
      selectedfull: ''
    });
  };

  handleSelectWinner = player => {
    this.setState({ selectedwinner: player });
    this.handlePageInc();
  };

  handleSelectBegginner = player => {
    this.setState({ selectedbeginner: player });
    this.handlePageInc();
  };

  handleSelectFull = player => {
    this.setState({ selectedfull: player });
    this.handlePageInc();
  };

  handleSaveGame = () => {
    const tmpbeginner = this.state.selectedbeginner;
    const tmpplayera = tmpbeginner;
    let tmpplayerb = this.state.selectedplayers.filter(function(item) {
      return tmpbeginner.indexOf(item) !== 0;
    });
    tmpplayerb = tmpplayerb[0];
    const tmpwinner = this.state.selectedwinner;

    var tmpscoreplayera;
    var tmpscoreplayerb;

    if (tmpwinner === tmpbeginner) {
      tmpscoreplayera = 1;
      tmpscoreplayerb = 0;
    } else {
      tmpscoreplayera = 0;
      tmpscoreplayerb = 1;
    }
    const tmpfull = this.state.selectedfull;

    const newgame = {
      playerA: tmpplayera,
      playerB: tmpplayerb,
      scoreplayerA: tmpscoreplayera,
      scoreplayerB: tmpscoreplayerb,
      winner: tmpwinner,
      beginner: tmpbeginner,
      full: tmpfull
    };
    this.setState({ newgame });

    this.props.onNewGame(newgame);
    this.setState({ newgame: {} });
    this.props.history.push('/games');
  };

  handleNewPlayer = newplayer => {
    if (newplayer) {
      const newplayernames = this.state.playernames;
      newplayernames.push(newplayer);
      this.setState({ playernames: newplayernames });

      this.setState({ newplayerform: false });

      toast.success('new player saved', {
        position: 'bottom-right',
        autoClose: true,
        closeOnClick: true
      });
    } else {
      this.setState({ newplayerform: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.newplayerform ? (
          <NewPlayer onNewPlayer={this.handleNewPlayer} />
        ) : (
          <Container>
            {this.state.page === 0 && (
              <Row>
                <Col>
                  <Select
                    playernames={this.state.playernames}
                    onSelect={this.handleSelect}
                  />
                </Col>
              </Row>
            )}
            {this.state.page === 0 && (
              <Row>
                <Col>
                  <Selected
                    selectedplayers={this.state.selectedplayers}
                    onDeSelect={this.handleDeSelect}
                  />
                </Col>
              </Row>
            )}
            {this.state.page === 1 && (
              <Row>
                <Col>
                  <Winner
                    selectedplayers={this.state.selectedplayers}
                    onSelectWinner={this.handleSelectWinner}
                  />
                </Col>
              </Row>
            )}
            {this.state.page === 2 && (
              <Row>
                <Col>
                  <Started
                    selectedplayers={this.state.selectedplayers}
                    onSelectBeginner={this.handleSelectBegginner}
                  />
                </Col>
              </Row>
            )}
            {this.state.page === 3 && (
              <Row>
                <Col>
                  <FullOrHalf
                    selectedplayers={this.state.selectedplayers}
                    onSelectFull={this.handleSelectFull}
                  />
                </Col>
              </Row>
            )}
            <p />
            <p />
            {this.state.page === 0 &&
              this.state.selectedplayers.length !== 2 && (
                <Button
                  type="button"
                  color="success"
                  size="lg"
                  onClick={() => this.handleNewPlayer()}
                >
                  New Player
                </Button>
              )}
            <p />
            <p />
            <p />
            <ButtonGroup>
              {this.state.page !== 0 ? (
                <Button
                  type="button"
                  color="primary"
                  size="lg"
                  onClick={() => this.handlePageDec()}
                >
                  back
                </Button>
              ) : (
                <Button type="button" color="secondary" size="lg">
                  back
                </Button>
              )}
              {this.state.page !== this.state.pagelast ? (
                <Button
                  type="button"
                  color="primary"
                  size="lg"
                  onClick={() => this.handlePageInc()}
                >
                  next
                </Button>
              ) : (
                <Button type="button" color="secondary" size="lg">
                  next
                </Button>
              )}
              {this.state.selectedplayers.length === 2 &&
              this.state.selectedbeginner &&
              this.state.selectedwinner &&
              this.state.selectedfull ? (
                <Button
                  type="button"
                  color="primary"
                  size="lg"
                  onClick={() => this.handleSaveGame()}
                >
                  save
                </Button>
              ) : (
                <Button type="button" color="secondary" size="lg">
                  save
                </Button>
              )}
            </ButtonGroup>
          </Container>
        )}
      </React.Fragment>
    );
  }
}

export default withRouter(AddGameForm);
