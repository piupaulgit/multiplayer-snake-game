
module.exports = {
    initGame
}
  
function initGame() {
    const state = createGameState()
    return state;
}


function createGameState() {
    return {
            background: '#333',
            block: 10,
            canvas : null,
            frame: 23,
            foods: {
                colors: 
                ["rgba(255,252,99,1)",
                "rgba(255,216,99,1)",
                "rgba(255,176,99,1)",
                "rgba(255,135,99,1)",
                "rgba(255,95,99,1)"]
            },
            flags: {
                gameOver: false,
                paused: false,
                result: undefined,
                tie: false
            },
            players: {
                player1: {
                    snake: {
                        length: 3,
                        color: "0,150,255",
                        x : 200,
                        y : 200,
                        bodyParts: [],
                        direction: 'UP'
                    },
                    score: {
        
                    }
                },
                player2: {
                    snake: {
                        length: 3,
                        color : "225,80,0",
                        x : 500,
                        y : 200,
                        bodyParts: [],
                        direction: 'UP'
                    },
                    score: {
        
                    }
                }
            }
        
    }
}
