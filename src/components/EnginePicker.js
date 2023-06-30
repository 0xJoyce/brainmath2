"use client";

import { useGame } from "./ContextProvider";
import GameEngine from "./GameEngine";
import MessageEngine from "./MessageEngine";

export default function EnginePicker() {
  const { gameActive } = useGame();
  return gameActive ? <GameEngine /> : <MessageEngine />;
}
