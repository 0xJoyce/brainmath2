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
  const userUUID = user.id;

  useEffect(() => {
    const lookUpGame = async () => {
      let { data: game_play_table, error } = await supabase
        .from("game_play_table")
        .select("*")
        .eq("user", userUUID)
        .eq("game_id", gameInfoNum);

      console.log(game_play_table);

      if (game_play_table) {
        console.log(game_play_table);
        setNoMoreRounds(true);
      } else null;
    };
    lookUpGame();
  }, [supabase]);

  if (noMoreRounds) {
    return <ComeBackTomorrow />;
  } else if (noMoreRounds === false) {
    return gameActive ? <GameEngine /> : <MessageEngine />;
  }
}
