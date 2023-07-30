import "./globals.css";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import ContextProviderGame from "@/components/ContextProviderGame";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

const inter = Inter({ subsets: ["latin"] });
let date = new Date().toLocaleDateString();

export const metadata = {
  title: "Math Par-Tee",
  description:
    "A math puzzle that is like golf.  Solve it with the fewest amount of steps.",
};

export default async function RootLayout({ children }) {
  console.log("ROOT LAYOUT HERE!!");
  const supabase = createServerComponentClient({ cookies }); //Do not understnad why need to pass in cookies.

  //Get user UUID.

  //IMPORTANT: NEED TO HANDLE IF NO USER IS LOGGED IN, SO USER IS NULL.

  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user, "HOT POTATOE!");

  //Get the daily game id number.
  let { data: game_parameter, error1 } = await supabase
    .from("game_parameter")
    .select("*")
    .eq("date", date);

  if (error1) {
    console.error("Error1 is: ", error1);
  }

  const [gameObject] = game_parameter;
  const gameID = gameObject.id;
  // console.log("The gameID is " + gameID);

  //Get the logged-in user's score info for today's game.

  // let { data: game_play_table, error2 } = await supabase
  //   .from("game_play_table")
  //   .select("*")
  //   .eq("user", userID)
  //   .eq("game_id", gameID);

  // if (error2) {
  //   console.error("Error2 is: ", error2);
  // }

  // console.log("The value of game_play_table is: ", game_play_table);

  let { data: todayGamePlay, error3 } = await supabase
    .from("game_play_table")
    .select("*")
    .eq("game_id", gameID);

  if (error3) {
    console.error("Error3 is: ", error3);
  }

  console.log(todayGamePlay);

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="text-center w-screen p-0 m-0 bg-yellow-50 text-black font-sans">
          <ContextProviderGame
            user={user}
            gameInfoNum={gameID}
            // userScoreArray={game_play_table}
            todayGamePlay={todayGamePlay}
          >
            <Navbar />
            {children}
            <Footer />
          </ContextProviderGame>
        </main>
      </body>
    </html>
  );
}
