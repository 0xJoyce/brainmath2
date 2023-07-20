//This is where the scores will be pushed to Supabase.  public.game_scores table.
//1.  Need to establish a supabase connection by importing it from the lib file.
//2. Create supabase instance within the function.
//3. Create appropriate rows in the public.game_scores table with the correct information.

//Data from GameEngine to be pushed into data base: roundNum, score for that round.

//3(a). The scores are pushed into the scoreArray each time the setScoreArray function is called.
//3(b). The scores should be pushed after each game, and not at the end of all three games.  Users may not play all three games.
//Right now the table has scores in individual columns, but the scorecard does a .map method to produce the cards.
//This would require updating the scorecard render method.

//3(c). Check whether the same user has already played the day's game once.  Allow to play only

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

export default function ContextProviderGame({ children }) {
  const [gameActive, setGameActive] = useState(initialGameContext.gameActive);
  const [roundNum, setRoundNum] = useState(initialGameContext.roundNum); //This needs to be 0-3 to correspond to the MessageEngine array.

  const [scoreArray, setScoreArray] = useState(initialGameContext.scoreArray); // This goes away now that we use database?  Or should this be stored locally and then I push each item to Supabase?

  console.log("Accessed ContextProviderGame component.");
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
    console.log("updateScores function calls setScoreArray function.");
    console.log(roundNum);
    console.log(scoreArray);
    console.log(gameActive);
    setScoreArray((prevState) => {
      return [...prevState, clicksUsed];
    });
  }

  const value = {
    gameActive,
    roundNum,
    scoreArray, // This goes away?  Because info will come from database now.
    updateGameActive,
    updateRoundNum,
    updateScores,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>; //Why did the value prop need two curly brackets?
}
