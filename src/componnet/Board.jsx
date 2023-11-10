import React, { useReducer, useState } from "react";
import BoardItem from "./BoardItem";

let winnerStates;

function reducer(state, action) {
  const { x, y, turn } = action.payload;
  winnerStates =
    (state[0][0] == turn && state[0][1] == turn && state[0][2] == turn) ||
    (state[1][0] == turn && state[1][1] == turn && state[1][2] == turn) ||
    (state[2][0] == turn && state[2][1] == turn && state[2][2] == turn) ||
    (state[0][0] == turn && state[1][0] == turn && state[2][0] == turn) ||
    (state[0][1] == turn && state[1][1] == turn && state[2][1] == turn) ||
    (state[0][2] == turn && state[1][2] == turn && state[2][2] == turn) ||
    (state[0][0] == turn && state[1][1] == turn && state[2][2] == turn) ||
    (state[0][2] == turn && state[1][1] == turn && state[2][0] == turn);

  switch (action.type) {
    case "PLAY":
      const tempState = [...state];
      if (!tempState[x][y]) {
        tempState[x][y] = turn;
      }
      return tempState;

    case "WINNER":
      if (winnerStates) {
      }
      return;
    default:
      return state;
  }
}

function Board() {
  const [board, dispatchBoard] = useReducer(reducer, [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ]);
  const [turn, setTurn] = useState("x");

  return (
    <div className=" grid grid-cols-3 gap-3">
      {board.map((iItem, i) =>
        iItem.map((jItem, j) => (
          <BoardItem
            gameOver={winnerStates}
            key={`${i}${j}`}
            x={i}
            y={j}
            board={board}
            dispatchBoard={dispatchBoard}
            turn={turn}
            setTurn={setTurn}
          />
        ))
      )}
    </div>
  );
}

export default Board;
