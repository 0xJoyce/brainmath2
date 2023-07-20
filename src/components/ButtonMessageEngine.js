"use client";

import { useGame } from "./ContextProviderGame";
import Link from "next/link";

export default function MessageEngineButton() {
  const { updateGameActive, roundNum } = useGame();

  const buttonText = [
    "Let's Play",
    "Let's try again.",
    "I'm going to crush it.",
    "See scores",
  ];

  function handleClick(event) {
    updateGameActive();
  }

  return (
    <div>
    
    {/* Note:
        The following <Link> component marks the point where each of the three rounds are completed.
        It is also the time when the score for each game have been updated to scoreArray and
        useState has been refreshed to the next render, so that the array contains all three items 
        (as opposed to just 2 of the 3 because useState stores the value somewhere and hasn't updated the state variable yet.) 
        This is the right time to push the scores into Supabase after rounds 1 and 3.  See below for round 3.*/}
     
      {roundNum < 3 ? (
        <Link
          href="../game"
          className="rounded-full bg-lime-300 px-3 py-3.5 text-sm font-semibold
        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
        hover:bg-gray-50"
          onClick={handleClick}
        >
          {buttonText[roundNum]}
        </Link>
      ) : (
        
        {/* Note:
        The following <Link> component marks the point where all three rounds are completed (roundNum = 3).
        It is also the time when not only all three scores have been updated to scoreArray, but the
        useState has been refreshed to the next render, so that the array contains all three items (as opposed to just 2 of the 3 because useState stores the value somewhere and hasn't updated the state variable yet.) 
        This is the right time to push the scores to Supabase subsequent to the final round 3.*/}

        <Link
          href="../game/scores"
          className="rounded-full bg-lime-300 px-3 py-3.5 text-sm font-semibold
        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
        hover:bg-gray-50"
          onClick={handleClick}
        >
          {buttonText[roundNum]}
        </Link>
      )}
    </div>
  );
}
