(() => {
    'use strict';

    game.drawSnake = (player) => {
        for(var i in game.players[player].snake.bodyParts){
            game.canvas.fillStyle = "red"
            game.canvas.fillRect(game.players[player].snake.bodyParts[i][0],game.players[player].snake.bodyParts[i][1],game.block,game.block);
        }

        // draw snake block
        game.canvas.fillStyle = "rgba("+game.players[player].snake.color+",1.2)";
        game.canvas.fillRect(game.players[player].snake.x, game.players[player].snake.y, game.block, game.block);

        game.drawSnakeEyes(player)
    }

    game.drawSnakeEyes = (player) => {
        game.canvas.fillStyle = "white";
        switch(game.players[player].snake.direction){
            case 'UP': 
            game.canvas.fillRect(game.players[player].snake.x+game.block/10, game.players[player].snake.y+game.block/10, game.block/5, game.block/3);
            game.canvas.fillRect(game.players[player].snake.x+(game.block-game.block/10 - game.block/5), game.players[player].snake.y+game.block/10, game.block/5, game.block/3);
            break
        }
    }
})()