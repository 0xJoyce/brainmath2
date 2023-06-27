"use client";

import { createContext, useState } from "react";

export const GameContext = createContext({}); //Why curly braces?

export default function ContextProvider({ children }) {
  const [gameActive, setGameActive] = useState(false);
  const [roundNum, setRoundNum] = useState(0); //This needs to be 0-3 to correspond to the MessageEngine array.
  const [scoreArray, setScoreArray] = useState([]);

  function updateGameActive() {
    setGameActive((prevState) => !prevState);
  }

  function updateRoundNum() {
    setRoundNum((curr) => {
      return curr + 1;
    });
  }

  // NEED FURTHER SET UP.//
  function updateScores(totalClicks) {
    const clicksUsed = totalClicks + 1;
    setScoreArray((prevState) => {
      return [...prevState, clicksUsed];
    });
  }

  function testFunction(x) {
    return x + 10;
  }

  const value = {
    gameActive,
    roundNum,
    scoreArray,
    updateGameActive,
    updateRoundNum,
    updateScores,
    testFunction,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>; //Why did the value prop need two curly brackets?
}
