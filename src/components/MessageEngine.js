"use client";

import { useGame } from "./ContextProvider";
import MessageEngineButton from "./ButtonMessageEngine";

export default function MessageEngine() {
  const { roundNum } = useGame();

  const message = [
    "Ready for Round 1?",
    "Can you do it in fewer steps?  Let's try again.",
    "You're doing great.  Let's make this third try your best one!",
    "How did you do?",
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
