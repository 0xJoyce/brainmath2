"use client";

import { useContext } from "react";
import { GameContext } from "./ContextProvider";
import GameEngine from "./GameEngine";
import MessageEngine from "./MessageEngine";

export default function EnginePicker() {
  const { gameActive } = useContext(GameContext);
  return gameActive ? <GameEngine /> : <MessageEngine />;
}
