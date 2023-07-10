import "./globals.css";
import { Inter } from "next/font/google";

import ContextProviderGame from "@/components/ContextProviderGame";
import GameParameter from "@/components/GameParameter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Math Par-Tee",
  description:
    "A math puzzle that is like golf.  Solve it with the fewest amount of steps.",
  ///Can add image here.
};

export default function RootLayout({ children }) {
  //Do I need "children: React.ReactNode"  That is a typescript thing.
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="text-center w-screen p-0 m-0 bg-yellow-50 text-black font-sans">
          <ContextProviderGame>
            <Navbar />
            {children}
            <Footer />
          </ContextProviderGame>
        </main>
      </body>
    </html>
  );
}

// <GameContext.Provider></GameContext.Provider>
