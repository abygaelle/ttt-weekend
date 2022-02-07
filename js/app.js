/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 6],
  [0, 4, 8],
  [2, 4, 6],
];





/*---------------------------- Variables (state) ----------------------------*/

let winner, playerTurn, board, turnCount

/*------------------------ Cached Element References ------------------------*/

const resetBtn = document.querySelector('#reset-button')
const boardSquare = document.querySelectorAll('.square')
const gameStat = document.querySelector('#message')



/*----------------------------- Event Listeners -----------------------------*/

// resetBtn.addEventListener('click', function (evt){
//   if(evt.target.textContent){
//     console.log(evt.target)
//   }
  
// })

boardSquare.forEach(square => square.addEventListener('click', handleClick))

resetBtn.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/

init()

function init() {
  board =[null, null, null, null, null, null, null, null, null]
  playerTurn = 1
  turnCount += 1

  winner = null;
  
  console.log(board)
  console.log('init invoked') 
  render()
}



function handleClick (event) {




  console.log(event.target.id)
}



function getWinner(){

  console.log(winner)
}



function render(){
  if (playerTurn === 1){
    message = "It's X's Turn!" 
  } else if (playerTurn === -1){
    message = "It's O's Turn!"
  }


  gameStat.textContent = message
  console.log('render invoked')
  }
