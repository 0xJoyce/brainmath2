"use client";

import { useGame } from "./ContextProvider"; //Fix to useGame().
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
