import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Container, Row, Button } from 'reactstrap';
import { toast } from 'react-toastify';
import Select from './select';
import Winner from './winner';
import Started from './started';
import FullOrHalf from './fullorhalf';

class AddGameForm extends Component {
  state = {
    playernames: [],
    selectedplayers: [],
    selectedwinner: '',
    selectedbeginner: '',
    selectedfull: ''
  };

  componentDidMount = () => {
    const { playernames } = this.props;
    this.setState({ playernames });
  };

  handleChange = ({ currentTarget: input }) => {
    // const newgame = { ...this.state.newgame };
    // newgame[input.name] = input.value;
    // this.setState({ newgame });
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
  };

  handleSelectBegginner = player => {
    this.setState({ selectedbeginner: player });
  };

  handleSelectFull = player => {
    this.setState({ selectedfull: player });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Select
              playernames={this.state.playernames}
              selectedplayers={this.state.selectedplayers}
              onSelect={this.handleSelect}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Winner
              selectedplayers={this.state.selectedplayers}
              onDeSelect={this.handleDeSelect}
              selectedwinner={this.state.selectedwinner}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Started
              selectedplayers={this.state.selectedplayers}
              onSelectBeginner={this.handleSelectBegginner}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <FullOrHalf
              selectedplayers={this.state.selectedplayers}
              onSelectFull={this.handleSelectFull}
            />
          </Col>
        </Row>
        <Button>Save Game</Button>
      </Container>
    );
  }
}

export default withRouter(AddGameForm);
