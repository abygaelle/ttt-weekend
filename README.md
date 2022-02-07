# tic-tac-toe starter code

<!-- 
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

let winner, playerTurn, squares, turnCount

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
  squares =[null, null, null, null, null, null, null, null, null]

  playerTurn = 1

  winner = null;

  turnCount = 0
  
  
  console.log(squares)
  console.log('init invoked') 
  // render()
}



function handleClick (event) {
  const id = event.target.id.replace('sq','')
  if (squares[id] === null){
    squares[id] = playerTurn
    playerTurn *= 1

    
  console.log(event.target.id)
  }
  for (let i = 0; i < squares.length; i++){
    if(squares[i] === 1){
      boardSquare.textContent = 'X'
    } else if (squares[i] === -1){
      boardSquare.textContent = 'O'
    } else {
      boardSquare.textContent = ""
    }
  }
  // console.log(squares)
  // render()
  // getWinner()
  }




function getWinner(){
  for (let i = 0; i < winningCombos.length; i++){
    const a = winningCombos[i][0]
    const b = winningCombos[i][1]
    const c = winningCombos[i][2]
      if (squares[a] + squares[b] + squares[c] === 3){
        console.log('X wins')
          message.textContent = 'X wins';
        } else if (squares[a] + squares[b] + squares[c] === -3){
          console.log('0 wins')
          message.textContent = '0 wins';
      }
  }

function render()

function render(){
  
  if (playerTurn === 1){
    message = "It's X's Turn!" 
  } else if (playerTurn === -1){
    message = "It's O's Turn!"
  }

  gameStat.textContent = message
  console.log('render invoked')
  }
} -->