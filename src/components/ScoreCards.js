"use client";
import { useGame } from "./ContextProviderGame";

export default function ScoreCards() {
  console.log("Accessing ScoreCards component.");
  const { scoreArray } = useGame();

  //   const scoresHere = [10, 2, 3];

  const cardMsg = ["First Round", "Second Round", "Third Round"];

  return (
    <div className="bg-lime-400 h-screen overflow-auto flex items-center justify-center">
      <div>
        <h3 className="italic py-5 text-5xl font-bold">Your scores</h3>

        {scoreArray.map((score, index) => (
          <dl key={index} className="mt-5 grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
              <dt className="truncate text-sm font-medium text-gray-500">
                {cardMsg[index]}
              </dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                {score} steps
              </dd>
            </div>
          </dl>
        ))}
      </div>
    </div>
  );
}
