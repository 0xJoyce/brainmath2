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
  //This makes it so that the user data can be accessible without additional connections or retrievals.  Faster on server side.
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let { data: game_parameter, error } = await supabase
    .from("game_parameter")
    .select("*")
    .eq("date", date);

  const [gameObject] = game_parameter;
  const gameID = gameObject.id;
  console.log("The gameID is " + gameID);
  console.log(typeof gameID);

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="text-center w-screen p-0 m-0 bg-yellow-50 text-black font-sans">
          <ContextProviderGame user={user} gameInfoNum={gameID}>
            <Navbar />
            {children}
            <Footer />
          </ContextProviderGame>
        </main>
      </body>
    </html>
  );
}
