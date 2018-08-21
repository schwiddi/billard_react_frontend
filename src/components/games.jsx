import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Game from './game';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';

class Games extends Component {
  render() {
    const { length: gamesCount } = this.props.games;
    const { pageSize, currentPage, onPageChange, onDelete, games } = this.props;

    if (gamesCount === 0)
      return <p className="text-center m-1">No Games in Database</p>;

    const pagedGames = paginate(games, currentPage, pageSize);

    return (
      <React.Fragment>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">
                <p className="text-right">#</p>
              </th>
              <th scope="col">
                <p className="text-right">Player</p>
              </th>
              <th scope="col" colSpan="2">
                <p className="text-center">Score</p>
              </th>
              <th scope="col">
                <p className="text-left">Player</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {pagedGames.map(game => (
              <Game key={game._id} onDelete={onDelete} game={game} />
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={gamesCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </React.Fragment>
    );
  }
}

export default Games;
