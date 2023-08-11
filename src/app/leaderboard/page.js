import LeaderboardComponent from "@/components/Leaderboard";
import { cookies } from "next/headers";
import { createServerSupabaseClient } from "../../../lib/hack";

export default async function LeaderboardPage() {
  const supabase = createServerSupabaseClient();
  let date = new Date().toLocaleDateString();

  //Get user UUID.

  const {
    data: { user: user },
  } = await supabase.auth.getUser();
  const userID = user.id;

  //Get gameID

  let { data: game_parameter, error1 } = await supabase
    .from("game_parameter")
    .select("*")
    .eq("date", date);

  if (error1) {
    console.error("Error1 is: ", error1);
  }
  const [gameObject] = game_parameter;
  const gameID = gameObject.id;

  //Get the logged-in user's score info for today's game.

  let { data: game_play_table, error2 } = await supabase
    .from("game_play_table")
    .select("*")
    .eq("user", userID)
    .eq("game_id", gameID);

  if (error2) {
    console.error("Error2 is: ", error2);
  }

  console.log("The value of game_play_table is: ", game_play_table);

  // Get all of the games from all players for today's game.
  let { data: todayGamePlay, error3 } = await supabase
    .from("game_play_table")
    .select("*")
    .eq("game_id", gameID);

  if (error2) {
    console.error("Error3 is: ", error3);
  }

  return (
    <LeaderboardComponent
      userID={userID}
      gameID={gameID}
      userScoreArray={game_play_table}
      todayGamePlay={todayGamePlay}
    />
  );
}
