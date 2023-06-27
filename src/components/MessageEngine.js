"use client";
import { useContext } from "react";
import { GameContext } from "./ContextProvider";
import MessageEngineButton from "./ButtonMessageEngine";

export default function MessageEngine() {
  const { roundNum } = useContext(GameContext);

  const message = [
    "Press to start Round 1.",
    "Press to start Round 2.",
    "Press to start Round 3.",
    "All tries gone. Let's see how you did.",
  ];
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 h-screen overflow-auto flex items-center justify-center">
      <div>
        <h1 className="mb-10 text-3xl">{message[roundNum]}</h1>

        <MessageEngineButton />
      </div>
    </div>
  );
}
