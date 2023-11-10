import React from "react";

function BoardItem({ dispatchBoard, board, turn, setTurn, x, y, gameOver }) {
  const HandleClick = () => {
    console.log(888);
    dispatchBoard({ type: "PLAY", payload: { x: x, y: y, turn: turn } });
    turn === "x" ? setTurn("o") : setTurn("x");
  };

  const imgSRC =
    board[x][y] === "x" ? "tic.svg" : board[x][y] === "o" ? "on.svg" : "";

  return (
    <button
      {...(gameOver && { disabled: true })}
      onClick={HandleClick}
      className="rounded-[5px] w-20 h-20 bg-[#2C53B7] hover:bg-[#577fe3]"
    >
      <img src={imgSRC} alt="" />
    </button>
  );
}

export default BoardItem;
