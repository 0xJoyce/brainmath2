"use client";

import { useGame } from "./ContextProviderGame";
import GameEngine from "./GameEngine";
import MessageEngine from "./MessageEngine";

export default function EnginePicker() {
  const { gameActive } = useGame();

  return gameActive ? <GameEngine /> : <MessageEngine />;
}
