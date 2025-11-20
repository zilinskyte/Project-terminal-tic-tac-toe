export function validateMove(move, board) {
    const [row, col] = move.split(",").map(Number);

    // check if row/col are numbers 1-3
    if (![1, 2, 3].includes(row) || ![1, 2, 3].includes(col)) {
        console.log("Try again...");
        return false;
    }

    // check if the space is free
    if (board[row - 1][col - 1] !== "_") {
        console.log("Try again...");
        return false;
    }

    return true;
}

export function makeMove(board, move, player) {
    if (!validateMove(move, board)) return false;

    const [row, col] = move.split(",").map(Number);
    board[row - 1][col - 1] = player;

    return true;
}
