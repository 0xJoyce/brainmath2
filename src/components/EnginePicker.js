"use client";

import { useGame } from "./ContextProviderGame";
import GameEngine from "./GameEngine";
import MessageEngine from "./MessageEngine";

export default function EnginePicker() {
  const { gameActive } = useGame();
  console.log(
    "Accessing EnginePicker component.  Variable gameActive is " + gameActive
  );
  return gameActive ? <GameEngine /> : <MessageEngine />;
}
