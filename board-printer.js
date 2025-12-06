/* 
    Given a tic-tac-toe board represented by an array of arrays - output the board to the terminal.
    For example, if we have the following board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
    We should output something like this (feel free to be creative):
          X  |     |     
        =================
             |  X  |     
        =================
          O  |  O  |  X  
        =================
    Test your function by calling it with an example tic-tac-toe board.
*/

let board = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

function printBoard(board) {
  // Setting parameter board within the function printBoard
  for (let i = 0; i < board.length; i++) {
    // loop array of 3 arrays, adds count of one to index
    const rowString = board[i].map((cell) => ` ${cell} `).join("|"); // map each cell to a string with spaces and join with '|'
    console.log(rowString); // print the row string
    if (i < board.length - 1) {
      console.log("-----------"); // print separator after each row except the last
    }
  }
}
printBoard(board);

/*
    Given a tic-tac-toe board (an array of arrays),
        - return true if there are no moves left to make (there are no more '_' values)
        - return false if there are still moves that can be made
*/
 export function checkIfNoMovesLeft(board) {
  for (let row of board) {
    for (let cell of row) {
      if (cell === " ") {
        return false;
      }
    }
  }
  return true;
}
