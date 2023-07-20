"use client";

import { supabase } from "../../lib/supabase";
import { useGame } from "./ContextProviderGame";
import Link from "next/link";
import { useEffect } from "react";

export default function MessageEngineButton() {
  const { updateGameActive, roundNum, scoreArray } = useGame();

  const buttonText = [
    "Let's Play",
    "Let's try again.",
    "I'm going to crush it.",
    "See scores",
  ];

  function SupabaseConnect() {
    console.log(
      "Accessing supabaseConnect function inside ButtonMessageEngine component."
    );
    useEffect(() => {
      async function connectToSupabase() {
        const supabaseClient = await supabase;
        console.log(supabaseClient); // For testing
      }
      connectToSupabase();
      console.log(
        "Successful Supabase connection at supabaseConnect function."
      ); //
    }, []);
    return null;
  }
  SupabaseConnect();

  function handleClick(event) {
    console.log(
      "I am inside handleClick function of the ButtonMessageEngine component."
    );
    updateGameActive();
  }

  return (
    <div>
      {roundNum < 3 ? (
        <Link
          href="/game"
          className="rounded-full bg-lime-300 px-3 py-3.5 text-sm font-semibold
        text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
        hover:bg-gray-50"
          onClick={handleClick}
        >
          {buttonText[roundNum]}
        </Link>
      ) : (
        <Link
          href="/game/scores" // PROBLEM: Doesn't go directly to /game/scores.  Flashes gameEngine.
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
