import React, { Component } from 'react';

class AddGameForm extends Component {
  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { players } = this.props;

    return (
      <div>
        <h1>New Game</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="playerA">Player A</label>
            <input
              autoFocus
              id="playerA"
              type="text"
              className="form-control"
              list="data"
            />
            <datalist id="data">
              {players.map(item => (
                <option key={item.id} value={item.name} />
              ))}
            </datalist>
          </div>
          <div className="form-group">
            <label htmlFor="scoreplayerA">Score Player A</label>
            <input id="scoreplayerA" type="number" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="playerB">Player B</label>
            <input
              id="playerB"
              type="text"
              className="form-control"
              list="data"
            />
            <datalist id="data">
              {players.map(item => (
                <option key={item.id} value={item.name} />
              ))}
            </datalist>
          </div>
          <div className="form-group">
            <label htmlFor="scoreplayerB">Score Player B</label>
            <input id="scoreplayerB" type="number" className="form-control" />
          </div>
          <button className="btn btn-primary m-2">Add</button>
        </form>
      </div>
    );
  }
}

export default AddGameForm;

/* <div onClick={this.props.onNew}>test</div> */
