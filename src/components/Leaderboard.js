"use client";
import { useGame } from "./ContextProviderGame";
import { useEffect, useState } from "react";

export default function LeaderboardComponent() {
  console.log("Accessing LeaderboardComponent.");

  const { gameInfoNum, userScoreArray, todayGamePlay } = useGame();
  const [userLowestScore, setUserLowestScore] = useState(null);

  console.log(todayGamePlay);
  console.log(todayGamePlay.length);

  useEffect(() => {
    if (userScoreArray.length > 0) {
      const scores = userScoreArray.map((entry) => entry.round_score);
      const minScore = Math.min(...scores);
      setUserLowestScore(minScore);
    } else {
      console.log("Unable to calculate the min score for user.  Error. ");
    }
  }, [userScoreArray]);

  console.log(userLowestScore);

  return (
    <div className="bg-lime-400 h-screen overflow-auto flex items-center justify-center">
      <div>
        <h3 className="py-3 text-5xl font-bold">🏆 Leaderboard 🏆</h3>
        <h3 className="text-2xl font-bold">Game #{gameInfoNum}</h3>
        <h3 className="text-2xl ">
          Your best score is: {userLowestScore}. Great job!
        </h3>
        {/* 
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
        ))} */}
      </div>
    </div>
  );
}

//The goal is to retrieve the rows of data that matches the signed in user for that day's game.  Then find the lowest score.
//Then to retrive the retrieve all the game entries from every player on that day.  Order each player's score by the lowest score.
//Create an array of this organized score.
//Then loop through that array of people and their lowest scores and create a card for each leaderboard entry.
//Then rank all of the user's scores by lowest score.
//The lowest score is first on the leaderboard.

// [
//     {
//     user: UUID
//     gameIdInfo: Number
//     roundOneScore: Number
//     roundTwoScore: Number
//     roundThreeScore: Number
//     lowestScore: Number
// },
// {
//     user: UUID
//     gameIdInfo: Number
//     roundOneScore: Number
//     roundTwoScore: Number
//     roundThreeScore: Number
//     lowestScore: Number
// },

// ]
