"use client";

import { useState, useEffect } from "react";

import { useGame } from "./ContextProviderGame";
import { useGameParameter } from "./GameParameter";

export default function GameEngine() {
  const { todayParameter } = useGameParameter();

  const winNum = Number(todayParameter?.win_num ?? 20);
  const startNum = Number(todayParameter?.start_num ?? 10);
  const addNum = Number(todayParameter?.increment ?? 5);
  const minusNum = Number(todayParameter?.decrement ?? 2);

  const { roundNum, updateGameActive, updateRoundNum, updateScores } =
    useGame();

  const [currentNum, setNum] = useState(0); //Per Chat, due to async nature, The initial state used to be start_Num, but changed to 0.
  const [totalClicks, setClicks] = useState(0);

  //This was a Chat suggestion on updating startNum when actually loaded from Supabase.
  useEffect(() => {
    if (startNum) {
      setNum(startNum);
    }
  }, [startNum]);

  function increaseNum() {
    if (addNum && winNum) {
      const afterAddNum = currentNum + addNum;
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
  }

  function decreaseNum() {
    if (minusNum && winNum) {
      const afterMinusNum = currentNum - minusNum;
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
  }

  if (todayParameter == null) {
    return null;
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
