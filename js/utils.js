var size = [window.width,window.height];
(() => {
    'use strict';
    game.reset = () => {

    }

    game.battleFieldSize = () => {
        document.getElementById('snakeBattle').setAttribute('width', window.innerWidth)
        document.getElementById('snakeBattle').setAttribute('height', window.innerHeight)
        game.width = window.innerWidth;
        game.height = window.innerHeight;
    }

    game.mainAnimationLoop = () =>{

        game.frame++;
        game.canvas.clearRect(0,0,game.width+game.block,game.height+game.block);

        // draw snakes
        game.drawSnake('player1')
        game.drawSnake('player2')
        game.controls('player1')
        game.controls('player2')





        setTimeout(game.mainAnimationLoop,90);
    }


})()