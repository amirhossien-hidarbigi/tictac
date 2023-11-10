import React from "react";
import BoardItem from "./BoardItem.JSX";
import Board from "./Board";

function SecondPage() {
  return (
    <div className="w-full h-[100vh] bg-[#275eeb] bg-[url('Vector.svg')]  flex flex-col justify-around items-center ">
      <span className=" text-[70px] text-white "> Tics Turn</span>
      <Board />
      <span className=" text-[30px] text-white">Playing..</span>
    </div>
  );
}

export default SecondPage;
