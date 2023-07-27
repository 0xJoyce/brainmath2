"use client";

import { useGame } from "./ContextProviderGame";
import MessageEngineButton from "./ButtonMessageEngine";
import { useGameParameter } from "./GameParameter";

const message = [
  "You get three rounds per daily game.  You must play all three rounds at once.  Ready for Round 1?",
  "Can you do it in fewer steps?  Let's try again.",
  "You're doing great.  Let's make this third try your best one!",
  "How did you do?",
];

export default function MessageEngine() {
  const { roundNum, scoreArray, gameActive } = useGame();
  const { todayParameter } = useGameParameter();

  console.log("Accessed MessageEngine component for roundNum = " + roundNum);

  if (todayParameter == null) {
    return null; // or return a loading spinner, or any placeholder component
  }

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 h-screen overflow-auto flex items-center justify-center">
      <div>
        <h1 className="mb-10 text-3xl">{message[roundNum]}</h1>
        <MessageEngineButton />
      </div>
    </div>
  );
}
