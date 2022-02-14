// Select elements and attach functions via event listeners
const gameBoard  = document.querySelector(".container")
const gameTiles = document.querySelectorAll(".tiles")
const playAgain = document.querySelector("#playAgain")
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
// You will also need a variable to keep track of moves. This will be used to indicate whether or not to draw an X or an O
const player1 = "X"
const player2 = "O"
// A user should be able to click on different squares to make a move.

const addMarker = (event) => {
    let currentPlayer = player1
    // const tile= event.target.id
    // const marker = event.target
    // document.getElementsByClassName("tiles").innerHTML = "X" // <-- Doesn't work, clicking doesn't console log anything.
    const xMarker = document.createElement("p")
     xMarker.innerText = player1
    // event.target.appendChild(xMarker)

    const oMarker = document.createElement("p")
     oMarker.innerText = player2
    // event.target.appendChild(oMarker)
    // console.log("clicked", gameTiles)
    if (currentPlayer === player1) {
        currentPlayer = player2
        //xMarker.innerText = player1
        event.target.appendChild(xMarker)
    } else if (currentPlayer === player2) {
        //oMarker.innerText = player2
    event.target.appendChild(oMarker)
    // if /esle stament still ONLY returns one symbol
    // doesn't alltnernate
    // same tile clicks generates more symbols.
    }
}
// for (const tile of gameTiles) {
//         tile.addEventListener("click", addMarker)
        
//         // console.log("the marker of this tile is", tile) 
//         // console.log was able to recognize the individual tiles
//         // add player marker to grid   
//     }   
// }
for ( let i = 0; i < gameTiles.length; i++) { 
    gameTiles[i].addEventListener("click", addMarker)  
}
    // double check if tiles come in as an array
    //console.log(gameTiles.length)

// Every click will alternate between marking an X and O

// Upon marking of an individual cell, use JavaScript to add an X or O to the cell, according to whose turn it is.
const resetButton = () => {
    // while (gameTiles.firstChild) {
    //     gameTiles.removeChild(gameTiles.firstChild)
    // }
    // code above doesn't work
    // maybe try for loop
    // reset button doesnt do anything
}
// A cell should not be able to be replayed once marked.

// You should not be able to click remaining empty cells after the game is over.

// Add a reset button that will clear the contents of the board.

// Add a reset button that will clear the contents of the board.

// Detect draw conditions (ties/cat's game)

// Detect winner: Stop game and declare the winner if one player ends up getting three in a row.

// Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.

document.addEventListener('DOMContentLoaded', () => {
   playAgain.addEventListener("click", resetButton)
});
  