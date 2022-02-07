/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 5, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, , 2],
];





/*---------------------------- Variables (state) ----------------------------*/

let winner, turn, board

/*------------------------ Cached Element References ------------------------*/

const resetBtn = document.querySelector('#reset-button')
const boardSquare = document.querySelectorAll('.square')
const msg = document.querySelector('#message')



/*----------------------------- Event Listeners -----------------------------*/

// resetBtn.addEventListener('click', function (evt){
//   if(evt.target.textContent){
//     console.log(evt.target)
//   }
  
// })


boardSquare.forEach(square => square.addEventListener('click', handleClick))

/*-------------------------------- Functions --------------------------------*/
let board =[null, null, null, null, null, null, null, null, null]

init()

function init() {
  console.log('init invoked') 

  render()
}


function handleClick (event) {
  console.log(event.target.id)
}


function render(){
  console.log('render invoked')
}