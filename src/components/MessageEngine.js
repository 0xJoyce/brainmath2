"use client";
import { useGame } from "./ContextProviderGame";
import MessageEngineButton from "./ButtonMessageEngine";
import { useGameParameter } from "./GameParameter";

export default function MessageEngine() {
  const { roundNum } = useGame();
  const { todayParameter } = useGameParameter();

  const message = [
    "Ready for Round 1?",
    "Can you do it in fewer steps?  Let's try again.",
    "You're doing great.  Let's make this third try your best one!",
    "How did you do?",
  ];

  if (todayParameter == null) {
    return null; // or return a loading spinner, or any placeholder component
  }

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 h-screen overflow-auto flex items-center justify-center">
      <div>
        <h1 className="mb-10 text-3xl">{message[roundNum]}</h1>
        <MessageEngineButton />
        <div>
          WinNum is {todayParameter.win_num}
          {/* This is to test that GameParameter
        component is fetching from Supabase successfully. */}
        </div>
      </div>
    </div>
  );
}
