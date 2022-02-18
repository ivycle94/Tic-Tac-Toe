// Select elements and attach functions via event listeners
const gameBoard  = document.querySelector(".container")
const gameTiles = document.querySelectorAll(".tiles")
const playAgain = document.querySelector("#playAgain")
const currentPlayerMsg = document.querySelector("#currentPlayerMsg")
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
let player1 = "X"
let player2 = "O"
// A user should be able to click on different squares to make a move.
let currentPlayer = player1 //Goro told me to move this outside of scope, then prtins x , rest are o's
const addMarker = (event) => {
    if (event.target.textContent !== "") {
        return
    }
    // currentPlayer used to be here
    // const tile= event.target.id
    // const marker = event.target
    // document.getElementsByClassName("tiles").innerHTML = "X" // <-- Doesn't work, clicking doesn't console log anything.
    // const xMarker = document.createElement("p")
    // // event.target.appendChild(xMarker)
    //  const oMarker = document.createElement("p")
    // event.target.appendChild(oMarker)
    // console.log("clicked", gameTiles)
    // console.log(currentPlayer)
    if ("X" === currentPlayer) {
        event.target.innerText = player1
        // xMarker.innerText = player1
        // event.target.appendChild(xMarker)
        currentPlayerMsg.textContent = "Player 2"
        winningConditions(currentPlayer)
        currentPlayer = player2
    } else if ("O" === currentPlayer) {
        event.target.innerText = player2
        // oMarker.innerText = player2
        // event.target.appendChild(oMarker)
        currentPlayerMsg.textContent = "Player 1"  
        winningConditions(currentPlayer) 
        currentPlayer = player1
    // if /esle stament still ONLY returns one symbol
    // doesn't alltnernate
    // same tile clicks generates more symbols.
    }
}

const winningConditions = (player) => {
    // console.log(document.querySelectorAll(".tiles"))
    let currentTiles = document.querySelectorAll(".tiles")
    // winning condition the array numbers [0,1,2]
     if(currentTiles[0].innerText === "X" && currentTiles[1].innerText === "X" && currentTiles[2].innerText === "X") {
         console.log("X wins 0,1,2")
         alert ("Player X Wins")
         gameOver() 
     } else if(currentTiles[0].innerText === "O" && currentTiles[1].innerText === "O" && currentTiles[2].innerText === "O") {
         console.log("O wins 0,1,2")
         alert ("Player O Wins")
         gameOver() 
     } 
     // winning condition the array numbers [3,4,5]
     else if(currentTiles[3].innerText === "X" && currentTiles[4].innerText === "X" && currentTiles[5].innerText === "X") {
        console.log("X wins 3,4,5")
        alert ("Player X Wins")
        gameOver()  
     } else if(currentTiles[3].innerText === "O" && currentTiles[4].innerText === "O" && currentTiles[5].innerText === "O") {
        console.log("O wins 3,4,5") 
        alert ("Player O Wins")
        gameOver() 
     } 
     // winning condition the array numbers [6,7,8]
     else if(currentTiles[6].innerText === "X" && currentTiles[7].innerText === "X" && currentTiles[8].innerText === "X") {
        console.log("X wins 6,7,8") 
        alert ("Player X Wins")
        gameOver() 
     } else if(currentTiles[6].innerText === "O" && currentTiles[7].innerText === "O" && currentTiles[8].innerText === "O") {
        console.log("O wins 6,7,8") 
        alert ("Player O Wins")
        gameOver() 
     } 
      // winning condition the array numbers [0,3,6]
      else if(currentTiles[0].innerText === "X" && currentTiles[3].innerText === "X" && currentTiles[6].innerText === "X") {
        console.log("X wins 0,3,6")
        alert ("Player X Wins") 
        gameOver() 
     } else if(currentTiles[0].innerText === "O" && currentTiles[3].innerText === "O" && currentTiles[6].innerText === "O") {
        console.log("O wins 0,3,6") 
        alert ("Player O Wins")
        gameOver() 
     } 
      // winning condition the array numbers [1,4,7]
      else if(currentTiles[1].innerText === "X" && currentTiles[4].innerText === "X" && currentTiles[7].innerText === "X") {
        console.log("X wins 1,4,7") 
        alert ("Player X Wins")
        gameOver() 
     } else if(currentTiles[1].innerText === "O" && currentTiles[4].innerText === "O" && currentTiles[7].innerText === "O") {
        console.log("O wins 1,4,7") 
        alert ("Player O Wins")
        gameOver() 
     } 
      // winning condition the array numbers [2,5,8]
      else if(currentTiles[2].innerText === "X" && currentTiles[5].innerText === "X" && currentTiles[8].innerText === "X") {
        console.log("X wins 2,5,8") 
        alert ("Player X Wins")
        gameOver() 
     } else if(currentTiles[2].innerText === "O" && currentTiles[5].innerText === "O" && currentTiles[8].innerText === "O") {
        console.log("O wins 2,5,8") 
        alert ("Player O Wins")
        gameOver() 
     } 
      // winning condition the array numbers [0,4,8]
      else if(currentTiles[0].innerText === "X" && currentTiles[4].innerText === "X" && currentTiles[8].innerText === "X") {
        console.log("X wins 0,4,8") 
        alert ("Player X Wins")
        gameOver() 
     } else if(currentTiles[0].innerText === "O" && currentTiles[4].innerText === "O" && currentTiles[8].innerText === "O") {
        console.log("O wins 0,4,8") 
        alert ("Player O Wins")
        gameOver() 
     } 
      // winning condition the array numbers [2,4,6]
      else if(currentTiles[2].innerText === "X" && currentTiles[4].innerText === "X" && currentTiles[6].innerText === "X") {
        console.log("X wins 2,4,6")
        alert ("Player X Wins")
        gameOver() 
     } else if(currentTiles[2].innerText === "O" && currentTiles[4].innerText === "O" && currentTiles[6].innerText === "O") {
        console.log("O wins 2,4,6")
        alert ("Player O Wins")
        gameOver() 
        
        
     } else {
         if(currentTiles[0].innerText !== "" && currentTiles[1].innerText !== "" && currentTiles[2].innerText !== "" && currentTiles[3].innerText !== "" && currentTiles[4].innerText !== "" && currentTiles[5].innerText !== "" && currentTiles[6].innerText !== "" && currentTiles[7].innerText !== "" && currentTiles[8].innerText !== "") {
            console.log("TIE")
         }   
     }
        // console.log(currentTiles[0].innerText)
}

const gameOver = () => {
    for (let i = 0; i < gameTiles.length; i++) { 
        gameTiles[i].removeEventListener("click", addMarker) 
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
    //console.log("test")
    gameTiles.forEach( tile => {
        tile.innerText = ""
    }) 
    for ( let i = 0; i < gameTiles.length; i++) { 
        gameTiles[i].addEventListener("click", addMarker)  
    }
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
  