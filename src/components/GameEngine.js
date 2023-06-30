"use client";

import { useState } from "react";
import { useGame } from "./ContextProvider"; //Everywhere i used GameContext, I can use useGame because that provides initial value.

export default function GameEngine() {
  // ***These are the game play values to be changed daily.***//
  const winNum = 20;
  const startNum = 10;
  const addIncrement = 5;
  const minusIncrement = 2;
  ////////////////////////////////////////////////////////
  const { roundNum, updateGameActive, updateRoundNum, updateScores } =
    useGame();

  const [currentNum, setNum] = useState(startNum);
  const [totalClicks, setClicks] = useState(0);

  function increaseNum() {
    const afterAddNum = currentNum + addIncrement;
    setNum(afterAddNum);
    setClicks((curr) => {
      return curr + 1;
    });
    if (afterAddNum === winNum) {
      updateRoundNum();
      updateScores(totalClicks);
      updateGameActive();
      setClicks(0);
      setNum(startNum);
    }
  }

  function decreaseNum() {
    const afterMinusNum = currentNum - minusIncrement;
    setNum(afterMinusNum);
    setClicks((curr) => {
      return curr + 1;
    });
    if (afterMinusNum === winNum) {
      updateRoundNum();
      updateScores(totalClicks);
      updateGameActive();
      setClicks(0);
      setNum(startNum);
    }
  }

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 h-screen overflow-auto flex items-center justify-center">
      <div>
        <h2 className="text-2xl pb-10">
          Get to {""}
          <span className="text-3xl underline decoration-double decoration-pink-500">
            {winNum}
          </span>{" "}
          starting from {startNum}
        </h2>
        <h1 className="py-9">
          <span className="text-9xl oldstyle-nums italic font-bold">
            {currentNum}
          </span>
        </h1>
        {roundNum < 3 ? (
          <button
            type="button"
            className="mx-1 rounded-full bg-lime-500 px-3.5 py-1.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={decreaseNum}
          >
            -
          </button>
        ) : null}
        {roundNum < 3 ? (
          <button
            type="button"
            className="mx-1 rounded-full bg-lime-500 px-3.5 py-1.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={increaseNum}
          >
            +
          </button>
        ) : null}
      </div>
    </div>
  );
}
