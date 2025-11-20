import { makeMove, validateMove } from "./move-maker.js";

describe("validateMove", () => {
  let board;

  beforeEach(() => {
    board = [
      ["X", "_", "_"],
      ["_", "X", "_"],
      ["O", "O", "X"]
    ];
  });

  test("valid move on empty space", () => {
    expect(validateMove("1,2", board)).toBe(true);
  });

  test("invalid move outside board", () => {
    expect(validateMove("0,1", board)).toBe(false);
    expect(validateMove("4,2", board)).toBe(false);
  });

  test("invalid move in occupied space", () => {
    expect(validateMove("1,1", board)).toBe(false);
    expect(validateMove("3,1", board)).toBe(false);
  });

  test("invalid move with wrong format", () => {
    expect(validateMove("2-1", board)).toBe(false);
  });
});

describe("makeMove", () => {
  let board;

  beforeEach(() => {
    board = [
      ["X", "_", "_"],
      ["_", "X", "_"],
      ["O", "O", "X"]
    ];
  });

  test("makes a valid move for player X", () => {
    expect(makeMove(board, "1,2", "X")).toBe(true);
    expect(board[0][1]).toBe("X");
  });

  test("makes a valid move for player O", () => {
    expect(makeMove(board, "2,1", "O")).toBe(true);
    expect(board[1][0]).toBe("O");
  });

  test("returns false for invalid move", () => {
    expect(makeMove(board, "1,1", "X")).toBe(false);
  });
});
