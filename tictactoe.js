// create a bunch of variables of 
let playerTurn = document.querySelector('.player-turn');
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
let winningConditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
playerTurn.innerHTML = currentPlayer + "'s turn";

const gameBoard = document.querySelector('.game-board');

function handledBoxClicked(e){
    if(gameActive=== false)return 
    e.target.innerText = currentPlayer;
    gameState[e.target.getAttribute('data')] = currentPlayer

    checkWin()
    if(gameActive === false){
        return
    }
    //currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    playerChange()
}
function playerChange(){
    if(gameActive=== false)return 
    if(currentPlayer === 'X'){
        currentPlayer ='O'
    }else{
        currentPlayer = 'X'
    }
    playerTurn.innerHTML = currentPlayer + "'s turn"  
}


function checkWin(){

    for(let i = 0; i < winningConditions.length; i++){
        let condition = winningConditions[i]
        
        //[2,4,6]
        if(
            gameState[condition[0]]=== gameState[condition[1]] &&
            gameState[condition [0]]=== gameState[condition[2]] &&
            gameState[condition [0]]!== ""
            ){
                console.log('winner');
                playerTurn.innerHTML = currentPlayer + " Won "
                gameActive = false;
            }     
        }
    if(gameState.includes('')=== false && gameActive ){
        playerTurn.innerHTML ="Draw"
        gameActive = false
    }
}

for(let i = 0; i < 9; i++){
const box = document.createElement('div');

    box.setAttribute ('class','box');
    box.setAttribute ('data', i);
    box.addEventListener('click', handledBoxClicked);

    gameBoard.appendChild (box);
}


// Restart button function

const clearButton = document.querySelector(".restart-button");

clearButton.addEventListener('click',() => {
    const boxes = document.querySelectorAll('.box');
    
    for(let i = 0; i  < boxes.length; i++){
        let currentBox = boxes[i];
        currentBox.innerText = '';
        currentPlayer ="X";
        gameActive = true;
        playerTurn.innerHTML = currentPlayer + " 's turn";
        gameState = ["", "", "", "", "", "", "", "", ""];

    }
})
