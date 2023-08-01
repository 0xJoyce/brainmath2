"use client";

import GameEngine from "./GameEngine";
import MessageEngine from "./MessageEngine";
import ComeBackTomorrow from "./ComeBackTomorrow";
import { useState, useEffect } from "react";
import { useGame } from "./ContextProviderGame";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function EnginePicker() {
  console.log("Accessing EnginePicker component.");
  const supabase = createClientComponentClient();
  const [noMoreRounds, setNoMoreRounds] = useState(false);
  const { gameActive, user, gameInfoNum } = useGame();
  console.log(user);
  const userUUID = user?.id; //Need to handle scenario if no one is logged in and it is null.

  //Get this data on the server side and pass it down to the component as props.
  useEffect(() => {
    const lookUpGame = async () => {
      let { data: game_play_table, error } = await supabase
        .from("game_play_table")
        .select("*")
        .eq("user", userUUID)
        .eq("game_id", gameInfoNum);

      console.log(game_play_table);

      if (game_play_table && game_play_table.length > 0) {
        console.log("Game data found: ", game_play_table);
        setNoMoreRounds(true);
      } else {
        console.log("No game data found.");
        setNoMoreRounds(false);
      }
    };
    lookUpGame();
  }, [userUUID, gameInfoNum]);

  if (noMoreRounds) {
    return <ComeBackTomorrow />;
  } else if (gameActive) {
    return <GameEngine />;
  }
  return <MessageEngine />;
}
