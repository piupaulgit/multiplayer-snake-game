(() => {
    'use strict';
    game.start = () => {
        game.reset()
        game.canvas = document.getElementById('snakeBattle').getContext("2d");
        game.battleFieldSize()
        setTimeout(game.mainAnimationLoop,1100/game.frame);

        



        console.log(game, 'main game object')
    }

})()