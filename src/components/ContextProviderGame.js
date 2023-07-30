"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useContext, createContext, useEffect, useState } from "react";

const initialGameContext = {
  gameActive: false,
  roundNum: 0,
  scoreArray: [],
  updateGameActive: () => {},
  updateRoundNum: () => {},
  updateScores: (totalClicks) => {},
};

export const GameContext = createContext(initialGameContext); //Why curly braces?  Curly braces becuase the initial state is an object.  InitialGameContext is an object.

export const useGame = () => useContext(GameContext);

export default function ContextProviderGame({
  children,
  user,
  gameInfoNum,
  userScoreArray,
  todayGamePlay,
}) {
  console.log("ContextProviderGame component.");

  const supabase = createClientComponentClient();
  if (!user) return;
  const userID = user.id;

  const [gameActive, setGameActive] = useState(initialGameContext.gameActive);
  const [roundNum, setRoundNum] = useState(initialGameContext.roundNum); //This needs to be 0-3 to correspond to the MessageEngine array.
  const [scoreArray, setScoreArray] = useState(initialGameContext.scoreArray); // This goes away now that we use database?  Or should this be stored locally and then I push each item to Supabase?

  useEffect(() => {
    console.log(
      "Accessing useEffect within ContextProviderGame component.  About to access insertData async function."
    );

    const insertData = async () => {
      if (roundNum >= 1) {
        try {
          console.log("scoreArray is: " + scoreArray);
          console.log("roundNum is: " + roundNum);

          const { data, error } = await supabase
            .from("game_play_table")
            .insert([
              {
                round_number: roundNum,
                round_score: scoreArray[roundNum - 1],
                user: userID,
                game_id: gameInfoNum,
              },
            ]);
          if (error) console.log("Error inserting data:", error);
          else console.log("Data inserted successfully:", data);
        } catch (error) {
          console.log("Error fetching data:", error);
        }
      } else null;
    };

    insertData();
  }, [roundNum]);

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
    scoreArray, // Get this from database instead? But this will be very slow?
    user,
    gameInfoNum,
    userScoreArray,
    todayGamePlay,
    updateGameActive,
    updateRoundNum,
    updateScores,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>; //Why did the value prop need two curly brackets?
}

//Notes from Chris Mentor Session:  This code adds the userID with the score row.

// const {
//   data: { session },
// } = await supabase.auth.getSession();

// const {
//   data: {
//     user: { id: userID },
//   },
// } = await supabase.auth.getUser();

//This does the same thing as above.
// const user = await supabase.auth.getUser();
// const data = user.data;
// const deeperUser = data.user;
// const userID = deeperUser.id;
