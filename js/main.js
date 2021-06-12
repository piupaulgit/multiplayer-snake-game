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

let canvas, ctx;
let gameActive = false;


function startGame (gameState){
    canvas = document.getElementById('snakeBattle').getContext("2d");
    battleFieldSize()
    gameActive = true;
    setTimeout(mainAnimationLoop(gameState),1100/26);
}