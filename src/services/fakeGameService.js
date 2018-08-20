const games = [
  {
    _id: '1',
    playerA: 'Mani',
    playerB: 'Schwiddi',
    scoreplayerA: 0,
    scoreplayerB: 1,
    date: '2018-08-19T12:09:32.152Z'
  },
  {
    _id: '2',
    playerA: 'Bäsä',
    playerB: 'Till',
    scoreplayerA: 0,
    scoreplayerB: 1,
    date: '2018-08-19T12:09:32.152Z'
  },
  {
    _id: '3',
    playerA: 'Uli',
    playerB: 'Hans',
    scoreplayerA: 0,
    scoreplayerB: 1,
    date: '2018-08-19T12:09:32.152Z'
  },
  {
    _id: '4',
    playerA: 'Sabe',
    playerB: 'Michelle',
    scoreplayerA: 1,
    scoreplayerB: 0,
    date: '2018-08-19T12:09:43.338Z'
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
