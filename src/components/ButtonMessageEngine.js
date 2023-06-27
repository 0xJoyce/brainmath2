"use client";
import { useContext } from "react";
import { GameContext } from "./ContextProvider";
import { useRouter } from "next/navigation";

export default function MessageEngineButton() {
  const { updateGameActive, roundNum } = useContext(GameContext);
  const router = useRouter();

  const buttonText = [
    "Begin first try.",
    "Begin second try",
    "Begin third try",
    "See your scores",
  ];

  function handleClick(event) {
    {
      roundNum < 3 ? router.push("../game") : router.push("../game/scores");
    }
    updateGameActive();
  }

  return (
    <button
      type="button"
      className="rounded-full bg-lime-300 px-3 py-3.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      onClick={handleClick}
    >
      {buttonText[roundNum]}
    </button>
  );
}
