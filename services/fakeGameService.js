const games = [
  {
    _id: '1',
    playerA: 'Ludi',
    playerB: 'Hansi',
    scoreplayerA: 0,
    scoreplayerB: 1,
    date: '2018-08-19T12:09:32.152Z'
  },
  {
    _id: '2',
    playerA: 'Bert',
    playerB: 'Elfriede',
    scoreplayerA: 1,
    scoreplayerB: 0,
    date: '2018-08-19T12:09:43.338Z'
  },
  {
    _id: '3',
    playerA: 'Rosemarie',
    playerB: 'Lea',
    scoreplayerA: 1,
    scoreplayerB: 0,
    date: '2018-08-19T12:09:52.980Z'
  },
  {
    _id: '4',
    playerA: 'Mark',
    playerB: 'Christian',
    scoreplayerA: 1,
    scoreplayerB: 0,
    date: '2018-08-19T12:10:02.803Z'
  },
  {
    _id: '5',
    playerA: 'Bäsä',
    playerB: 'Schwiddi',
    scoreplayerA: 1,
    scoreplayerB: 0,
    date: '2018-08-19T19:12:34.900Z'
  },
  {
    _id: '6',
    playerA: 'Bäsä',
    playerB: 'Schwiddi',
    scoreplayerA: 1,
    scoreplayerB: 0,
    date: '2018-08-19T20:36:37.365Z'
  },
  {
    _id: '7',
    playerA: 'Bäsä',
    playerB: 'Schwiddi',
    scoreplayerA: 1,
    scoreplayerB: 0,
    date: '2018-08-20T07:40:42.836Z'
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
