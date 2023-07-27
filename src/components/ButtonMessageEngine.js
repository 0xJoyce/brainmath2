"use client";
import { useGame } from "./ContextProviderGame";
import Link from "next/link";


export default function MessageEngineButton() {
  console.log("Accessing MessageEngineButton component.");
  const { updateGameActive, roundNum, scoreArray } = useGame();

  const buttonText = [
    "Let's Play",
    "Let's try again.",
    "I'm going to crush it.",
    "See scores",
  ];

  //Note: The following code was commented out because it caused an issue.
  //The issue is that it created a react lazy component and I received this error:
  //"Error: Element type is invalid. Received a promise that resolves to: [object Promise]. Lazy element type must resolve to a class or function."

  // useEffect(() => {
  //   console.log(
  //     "Accessing supabaseConnect function in ButtonMessageEngine component."
  //   );

  //   const insertData = async () => {
  //     try {
  //       const { data, error } = await supabase
  //         .from("test_table")
  //         .insert([{ test_value: 123 }]);
  //       if (error) console.log("Error inserting data:", error);
  //       else console.log("Data inserted successfully:", data);
  //     } catch (error) {
  //       console.log("Error fetching data:", error);
  //     }
  //   };

  //   insertData();
  // }, []);

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
