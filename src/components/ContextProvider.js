"use client";

import { useContext, createContext, useState } from "react";

const initialGameContext = {
  gameActive: false,
  roundNum: 0,
  scoreArray: [],
  updateGameActive: () => {},
  updateRoundNum: () => {},
  updateScores: (totalClicks) => {},
};

export const GameContext = createContext(initialGameContext); //Why curly braces?  Curly braces becuase the initial state is an object.

export const useGame = () => useContext(GameContext);

export default function ContextProvider({ children }) {
  const [gameActive, setGameActive] = useState(initialGameContext.gameActive);
  const [roundNum, setRoundNum] = useState(initialGameContext.roundNum); //This needs to be 0-3 to correspond to the MessageEngine array.

  const [scoreArray, setScoreArray] = useState(initialGameContext.scoreArray);

  function updateGameActive() {
    setGameActive((prevState) => !prevState);
  }

  function updateRoundNum() {
    setRoundNum((curr) => {
      const newRoundNum = curr + 1;
      return newRoundNum;
    });
  }

  function updateScores(totalClicks) {
    const clicksUsed = totalClicks + 1;
    setScoreArray((prevState) => {
      return [...prevState, clicksUsed];
    });
  }

  const value = {
    gameActive,
    roundNum,
    scoreArray,
    updateGameActive,
    updateRoundNum,
    updateScores,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>; //Why did the value prop need two curly brackets?
}
