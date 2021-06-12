

const { createServer } = require("http");
const { Server } = require("socket.io");
const { instrument } = require("@socket.io/admin-ui");
const httpServer = createServer();
const { makeid } = require('./utils');
const { FRAME_RATE } = require('./constants');
const { initGame } = require('./settings');


const io = new Server(httpServer, {
  cors: {
    origin: "*",
    credentials: true
  }
});

const state = {}
const clientRooms = {}

io.on('connection', client => {
    client.on('newGame', handleNewGame)
    client.on('joinGame', handleJoinGame)
    client.on('keydown', handleKeyDown)

    // functions
    function handleNewGame(){
      // create unique roomName/gameCode
      const roomName = makeid(5);

      // send this game code to server
      client.emit('gameCode', roomName);

      state[roomName] = initGame();

      // assign the gamecode as clientId
      clientRooms[client.id] = roomName;

      // user join the room after creating room
      client.join(roomName);

      // player one
      client.number = 1;

      // send player info to server
      client.emit('init', 1)

     
    }

    function handleJoinGame(roomNumber){
      const room = io.sockets.adapter.rooms.has(roomNumber)
      console.log(room)
      if(room){
        client.join(roomNumber);
      }
      else{
        client.emit('wrongGameCode')
        return
      }
      clientRooms[client.id] = roomNumber;

      // player one
      client.number = 2;

      // send player info to server
      client.emit('init', 2)

      // start game after second player joins
      startGameInterval(roomNumber); 
    }

    function handleKeyDown(keyCode){
      // console.log(keyCode, 'keeeeyyy')
    }
})

function startGameInterval(roomName){
  const intervalId = setInterval(() => {
    emitGameState(roomName, state[roomName])
    clearInterval(intervalId);
  }, 1000 / FRAME_RATE);
}

function emitGameState(room, gameState){
  // Send this event to everyone in the room.
  io.sockets.in(room)
    .emit('gameState', JSON.stringify(gameState));
}
io.listen(3300)