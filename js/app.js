/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
console.log(winningCombos)




/*---------------------------- Variables (state) ----------------------------*/

let winner, playerTurn, squares, turnCount, isWinner, message

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
  // console.log(squares)
  // console.log('init invoked') 
  render()
  
}



function handleClick (event) {
  getWinner()
  const id = event.target.id.replace('sq','')
  if (squares[id] === null){
    squares[id] = playerTurn
    playerTurn *= -1
    turnCount += 1
    
  // console.log(event.target.id)
  render()
  
  }
  }




function getWinner(){
  
  for (let i = 0; i < winningCombos.length; i++){
    const a = winningCombos[i][0]
    const b = winningCombos[i][1]
    const c = winningCombos[i][2]
      if (squares[a] + squares[b] + squares[c] === 3){
        console.log('X wins')
          message = 'YAY X wins';
          // winner = 'X'
        } else if (squares[a] + squares[b] + squares[c] === -3){
          console.log('O wins')
          message = 'YAY O wins';
          // winner = 'O'
          // console.log(message)
      }
      if (turnCount === 9 && winner === null){
        console.log('Tie')
          message = "OH NO it's a tie!";
        
      // gameStat.textContent = message
      render()
    }
  }
}


function render(){
  for (let i = 0; i < squares.length; i++){
    if(squares[i] === 1){
      boardSquare[i].textContent = 'X'
    } else if (squares[i] === -1){
      boardSquare[i].textContent = 'O'
    } else {
      boardSquare[i].textContent = ""
    }
    }
  if (playerTurn === 1 && !winner){
      message = "It's X's Turn!" 
    } else if (playerTurn === -1 && !winner){
      message = "It's O's Turn!"
    }
  gameStat.textContent = message
  // console.log('render invoked')
}
