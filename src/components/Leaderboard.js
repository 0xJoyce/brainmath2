"use client";
import { useEffect, useState } from "react";

export default function LeaderboardComponent({
  userID,
  gameID,
  userScoreArray,
  todayGamePlay,
}) {
  console.log("Accessing LeaderboardComponent.");

  const [userLowestScore, setUserLowestScore] = useState(null);
  const [leaderCards, setLeaderCards] = useState([]);
  let date = new Date().toLocaleDateString();

  //This looks through the logged in user's scores for today and finds lowest score.
  useEffect(() => {
    if (userScoreArray.length > 0) {
      const scores = userScoreArray.map((entry) => entry.round_score);
      const minScore = Math.min(...scores);
      setUserLowestScore(minScore);
    } else {
      console.log("Unable to calculate the min score for user.  Error. ");
    }
  }, [userScoreArray]);

  //This finds the lowest score from everyone who played today's game and pushes it to a new array.

  useEffect(() => {
    const leaderInfo = todayGamePlay.reduce((acc, gamePlayObject) => {
      if (!acc[gamePlayObject.user])
        acc[gamePlayObject.user] = gamePlayObject.round_score;
      else if (gamePlayObject.round_score < acc[gamePlayObject.user]) {
        acc[gamePlayObject.user] = gamePlayObject.round_score;
      }
      return acc;
    }, {});
    setLeaderCards(Object.entries(leaderInfo).sort((a, b) => a[1] - b[1]));
  }, [todayGamePlay]);

  return (
    <div className="bg-lime-400 h-screen overflow-auto flex items-center justify-center">
      <div>
        <h3 className="py-3 text-5xl font-bold">🏆 Leaderboard 🏆</h3>
        <h3 className="text-2xl font-bold">Game #{gameID}</h3>
        <h3 className="text-2xl ">
          Your best score is: {userLowestScore}. Great job!
        </h3>
        {leaderCards.map((entry, index) => (
          <dl key={index} className="mt-5 grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
              <dt className="truncate text-sm font-medium text-gray-500">
                UserID: {entry[0]}
              </dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                Best Score: {entry[1]}
              </dd>
            </div>
          </dl>
        ))}
      </div>
    </div>
  );
}
