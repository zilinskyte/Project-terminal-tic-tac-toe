import {
  isGameOver,
  checkIfPlayerWon,
  checkRow,
  checkColumn,
  checkDiagonal,
} from "../status-checker";

describe("test the status of the board at a given time", () => {
  test("checkRow returns true when player occupies entire row and false otherwise", () => {
    const board = [
      ["X", "_", "O"],
      ["X", "X", "X"],
      ["O", "_", "O"],
    ];

    expect(checkRow(board, "X", 1)).toBe(true);
    expect(checkRow(board, "O", 1)).toBe(false);
    expect(checkRow(board, "X", 0)).toBe(false);
  });

  test("checkColumn returns true when player occupies entire column and false otherwise", () => {
    const board = [
      ["O", "X", "_"],
      ["O", "X", "X"],
      ["O", "_", "_"],
    ];

    expect(checkColumn(board, "O", 0)).toBe(true);
    expect(checkColumn(board, "X", 1)).toBe(false);
    expect(checkColumn(board, "X", 2)).toBe(false);
  });

  test("checkDiagonal returns true for both diagonal wins", () => {
    const board = [
      ["X", "O", "_"],
      ["O", "X", "_"],
      ["_", "_", "X"],
    ];

    expect(checkDiagonal(board, "X")).toBe(true);

    const anti = [
      ["_", "_", "O"],
      ["_", "O", "_"],
      ["O", "_", "_"],
    ];

    expect(checkDiagonal(anti, "O")).toBe(true);
  });
});

describe("checks if a player has won given a board and player value", () => {
  test("checkIfPlayerWon detects wins via rows, columns and diagonals", () => {
    const rowWin = [
      ["X", "X", "X"],
      ["O", "_", "O"],
      ["_", "_", "_"],
    ];

    const colWin = [
      ["O", "X", "_"],
      ["O", "X", "_"],
      ["O", "_", "X"],
    ];

    const diagWin = [
      ["X", "O", "_"],
      ["_", "X", "O"],
      ["_", "_", "X"],
    ];

    const diagWinAnti = [
      ["X", "X", "O"],
      ["X", "O", "O"],
      ["O", "_", "X"],
    ];

    expect(checkIfPlayerWon(rowWin, "X")).toBe(true);
    expect(checkIfPlayerWon(colWin, "O")).toBe(true);
    expect(checkIfPlayerWon(diagWin, "X")).toBe(true);
    expect(checkIfPlayerWon(diagWinAnti, "O")).toBe(true);
  });
});
