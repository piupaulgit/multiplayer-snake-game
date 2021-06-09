

const { createServer } = require("http");
const { Server } = require("socket.io");
const { instrument } = require("@socket.io/admin-ui");
const httpServer = createServer();
const { makeid } = require('./utils');
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    credentials: true
  }
});

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

      // player one
      client.number = 2;

      // send player info to server
      client.emit('init', 2)
    }

    function handleKeyDown(keyCode){
      // console.log(keyCode, 'keeeeyyy')
    }
})

instrument(io, {
  auth: false
});

io.listen(3300)