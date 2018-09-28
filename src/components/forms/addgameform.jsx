import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';

class AddGameForm extends Component {
  state = {
    newgame: {
      playerA: '',
      scoreplayerA: '',
      playerB: '',
      scoreplayerB: ''
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const newgame = { ...this.state.newgame };
    newgame[input.name] = input.value;
    this.setState({ newgame });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onNewGame(this.state.newgame);
    const clearState = {
      playerA: '',
      scoreplayerA: '',
      playerB: '',
      scoreplayerB: ''
    };
    this.setState({ newgame: clearState });
    this.props.history.push('/games');
  };

  render() {
    const { playernames } = this.props;

    return (
      <div>
        <h1>New Game</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="playerA">Player A</label>
            <input
              id="playerA"
              type="text"
              className="form-control"
              list="data"
              autoFocus
              value={this.state.newgame.playerA}
              onChange={this.handleChange}
              name="playerA"
            />
            <datalist id="data">
              {playernames.map((item, index) => (
                <option key={index} value={item} />
              ))}
            </datalist>
          </div>
          <div className="form-group">
            <label htmlFor="scoreplayerA">Score Player A</label>
            <input
              id="scoreplayerA"
              value={this.state.newgame.scoreplayerA}
              type="number"
              className="form-control"
              onChange={this.handleChange}
              name="scoreplayerA"
            />
          </div>
          <div className="form-group">
            <label htmlFor="playerB">Player B</label>
            <input
              value={this.state.newgame.playerB}
              id="playerB"
              type="text"
              className="form-control"
              list="data"
              onChange={this.handleChange}
              name="playerB"
            />
            <datalist id="data">
              {playernames.map((item, index) => (
                <option key={index} value={item} />
              ))}
            </datalist>
          </div>
          <div className="form-group">
            <label htmlFor="scoreplayerB">Score Player B</label>
            <input
              id="scoreplayerB"
              value={this.state.newgame.scoreplayerB}
              type="number"
              className="form-control"
              onChange={this.handleChange}
              name="scoreplayerB"
            />
          </div>
          <Button color="primary" size="lg">
            Save
          </Button>
        </form>
      </div>
    );
  }
}

export default withRouter(AddGameForm);
