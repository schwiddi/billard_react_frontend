import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';

class AddGameForm2 extends Component {
  state = {
    newgame: {
      playerA: '',
      scoreplayerA: '',
      playerB: '',
      scoreplayerB: ''
    },
    playernames: {},
    newplayer: ''
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

  render() {
    return <div />;
  }
}

export default withRouter(AddGameForm2);
