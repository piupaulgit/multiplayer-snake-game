const io = require('socket.io')({
    cors: {
      origin: '*',
    }
});
const { makeid } = require('./utils');

io.on('connection', client => {
    client.emit('init', {data: 'hello'})
    client.on('newGame', handleNewGame)
    client.on('joinGame', handleJoinGame)
    client.on('keydown', handleKeyDown)



    // functions
    function handleNewGame(){
      const roomName = makeid(6);
      client.emit('gameCode', roomName);
      console.log(io.sockets)
    }

    function handleJoinGame(roomNumber){
      const room = io.sockets.adapter.rooms['FWJ_VLPLXt1WzDzwAAAC'];
      console.log(room, roomNumber)
    }

    function handleKeyDown(keyCode){
      // console.log(keyCode, 'keeeeyyy')
    }
})

io.listen(3300)