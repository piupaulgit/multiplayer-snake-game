// (() => {
//     'use strict';
//     game.start = () => {
//         // game.reset(game)
//         game.canvas = document.getElementById('snakeBattle').getContext("2d");
//         game.battleFieldSize()
//         setTimeout(game.mainAnimationLoop,1100/game.frame);

        



//         console.log(game, 'main game object')
//     }

// })()

let canvas;
let gameActive = false;


function startGame (gameState){
    canvas = document.getElementById('snakeBattle').getContext("2d");
    battleFieldSize()
    gameActive = true;
    console.log(gameState)
    drawSnake (gameState, 'player1')
    drawSnake (gameState, 'player2')
    // setTimeout(mainAnimationLoop,1100/26);
}

function drawSnake (gameState, player) {
        for(var i in gameState.players[player].snake.bodyParts){
        canvas.fillStyle = "red"
        canvas.fillRect(gameState.players[player].snake.bodyParts[i][0],gameState.players[player].snake.bodyParts[i][1],gameState.block,gameState.block);
    }

    // draw snake block
    canvas.fillStyle = "rgba("+gameState.players[player].snake.color+",1.2)";
    canvas.fillRect(gameState.players[player].snake.x, gameState.players[player].snake.y, gameState.block, gameState.block);
    drawSnakeEyes(gameState, player)
}

function drawSnakeEyes(gameState, player)  {
    canvas.fillStyle = "white";
        switch(gameState.players[player].snake.direction){
            case 'UP': 
                canvas.fillRect(gameState.players[player].snake.x+gameState.block/10, gameState.players[player].snake.y+gameState.block/10, gameState.block/5, gameState.block/3);
                canvas.fillRect(gameState.players[player].snake.x+(gameState.block-gameState.block/10 - gameState.block/5), gameState.players[player].snake.y+gameState.block/10, gameState.block/5, gameState.block/3);
                break;
            case 'Down':
                canvas.fillRect(gameState.players[player].snake+gameState.block/10,gameState.block+gameState.block-gameState.block/10 - gameState.block/3,gameState.block/5,gameState.block/3);
                canvas.fillRect(gameState.players[player].snake+(gameState.block-gameState.block/10 - gameState.block/5),gameState.block+gameState.block-gameState.block/10 - gameState.block/3,gameState.block/5,gameState.block/3);
                break;
            case 'RIGHT': 
                canvas.fillRect(gameState.players[player].snake+gameState.block-gameState.block/10 - gameState.block/3,gameState.block+gameState.block/10,gameState.block/3,gameState.block/5);
                canvas.fillRect(gameState.players[player].snake+gameState.block-gameState.block/10 - gameState.block/3,gameState.block+(gameState.block-gameState.block/10 - gameState.block/5),gameState.block/3,gameState.block/5);
                break;
            case 'LEFT':
                canvas.fillRect(gameState.players[player].snake+gameState.block/10,gameState.block+gameState.block/10,gameState.block/3,gameState.block/5);
                canvas.fillRect(gameState.players[player].snake+gameState.block/10,gameState.block+(gameState.block-gameState.block/10 - gameState.block/5),gameState.block/3,gameState.block/5);
                break
        }
}