const io = require('socket.io')({
    cors: {
      origin: '*',
    }
  });

io.on('connection', client => {
    client.emit('init', {data: 'hello'})
})

io.listen(3300)