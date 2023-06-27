import "./globals.css";
import { Inter } from "next/font/google";
import ContextProvider, { GameContext } from "@/components/ContextProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cool game",
  description: "Fun game to challenge your friends with.",
  ///Can add image here.
};

export default function RootLayout({ children }) {
  //Do I need "children: React.ReactNode"  That is a typescript thing.
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="text-center w-screen p-0 m-0 bg-yellow-50 text-black font-sans">
          <ContextProvider>
            {" "}
            <Navbar />
            {children} <Footer />
          </ContextProvider>
        </main>
      </body>
    </html>
  );
}

// <GameContext.Provider></GameContext.Provider>
