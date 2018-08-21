import _ from 'lodash';

const games = [
  {
    _id: '5b795e07b0532cf66e87aa32',
    playerA: 'Bert',
    playerB: 'Elfriede',
    scoreplayerA: 1,
    scoreplayerB: 0,
    date: '2018-08-19T12:09:43.338Z'
  },
  {
    _id: '5b795e1ab0532cf66e87aa34',
    playerA: 'Mark',
    playerB: 'Christian',
    scoreplayerA: 0,
    scoreplayerB: 1,
    date: '2018-08-19T12:10:02.803Z'
  },
  {
    _id: '5b79c12281ee700698f5b5e5',
    playerA: 'Bäsä',
    playerB: 'Schwiddi',
    scoreplayerA: 1,
    scoreplayerB: 0,
    date: '2018-08-19T19:12:34.900Z'
  },
  {
    _id: '5b79d4d548c7dc0e4970f213',
    playerA: 'Bäsä',
    playerB: 'Schwiddi',
    scoreplayerA: 0,
    scoreplayerB: 1,
    date: '2018-08-19T20:36:37.365Z'
  },
  {
    _id: '5b7a707a9a97de15c9e8a4cd',
    playerA: 'Bäsä',
    playerB: 'Schwiddi',
    scoreplayerA: 0,
    scoreplayerB: 1,
    date: '2018-08-20T07:40:42.836Z'
  },
  {
    _id: '5b7b2475878ef243896d91be',
    playerA: 'Bertrand',
    playerB: 'Yves',
    scoreplayerA: 1,
    scoreplayerB: 0,
    date: '2018-08-20T20:28:37.483Z'
  },
  {
    _id: '5b7b247b878ef243896d91bf',
    playerA: 'Bertrand',
    playerB: 'Yves',
    scoreplayerA: 0,
    scoreplayerB: 1,
    date: '2018-08-20T20:28:43.223Z'
  },
  {
    _id: '5b7b2485878ef243896d91c0',
    playerA: 'Bertrand',
    playerB: 'Yves',
    scoreplayerA: 1,
    scoreplayerB: 0,
    date: '2018-08-20T20:28:53.760Z'
  },
  {
    _id: '5b7b248e878ef243896d91c1',
    playerA: 'Peter',
    playerB: 'Paul',
    scoreplayerA: 1,
    scoreplayerB: 0,
    date: '2018-08-20T20:29:02.517Z'
  },
  {
    _id: '5b7b248f878ef243896d91c2',
    playerA: 'Peter',
    playerB: 'Paul',
    scoreplayerA: 1,
    scoreplayerB: 0,
    date: '2018-08-20T20:29:03.188Z'
  },
  {
    _id: '5b7b248f878ef243896d91c3',
    playerA: 'Peter',
    playerB: 'Paul',
    scoreplayerA: 0,
    scoreplayerB: 1,
    date: '2018-08-20T20:29:03.952Z'
  },
  {
    _id: '5b7b2490878ef243896d91c4',
    playerA: 'Peter',
    playerB: 'Paul',
    scoreplayerA: 1,
    scoreplayerB: 0,
    date: '2018-08-20T20:29:04.693Z'
  },
  {
    _id: '5b7b2496878ef243896d91c5',
    playerA: 'Peter',
    playerB: 'Paul',
    scoreplayerA: 0,
    scoreplayerB: 1,
    date: '2018-08-20T20:29:10.309Z'
  },
  {
    _id: '5b7b2497878ef243896d91c6',
    playerA: 'Peter',
    playerB: 'Paul',
    scoreplayerA: 0,
    scoreplayerB: 1,
    date: '2018-08-20T20:29:11.066Z'
  },
  {
    _id: '5b7b2497878ef243896d91c7',
    playerA: 'Peter',
    playerB: 'Paul',
    scoreplayerA: 0,
    scoreplayerB: 1,
    date: '2018-08-20T20:29:11.897Z'
  }
];

export function getGames() {
  return games;
}

export function getGame(id) {
  return games.find(i => i._id === id);
}

export function saveGame(game) {
  let gameInDb = games.find(i => i._id === game._id) || {};
  gameInDb.playerA = games.playerA;
  gameInDb.playerB = games.playerB;
  gameInDb.scoreplayerA = games.scoreplayerA;
  gameInDb.scoreplayerB = games.scoreplayerB;

  if (!gameInDb._id) {
    gameInDb._id = games.length++;
    games.push(gameInDb);
  }

  return gameInDb;
}

export function deleteGame(id) {
  let gameInDb = games.find(i => i._id === id);
  games.splice(games.indexOf(gameInDb), 1);
  return gameInDb;
}
