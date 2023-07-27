"use client";
import Link from "next/link";

//Will save the login upgrade for later.  Can't figure it out right now.  7/19/2023
// import { useState, useEffect } from "react";
// import { supabase } from "../../lib/supabase";

export default function Navbar() {
  // const [session, getSession] = useState(null);

  // useEffect(() => {
  //   findSession();

  //   //Add event listener for auth state changes.  Don't understand this one.
  //   const { data: subscription } = supabase.auth.onAuthStateChange(
  //     (event, _session) => {
  //       console.log(event, _session);
  //       findSession();
  //     }
  //   );
  //   //Unsubscribe from event listener when component unmounts.  Don't understand.
  //   return () => {
  //     subscription.unsubscribe();
  //   };
  // }, []);

  // async function findSession() {
  //   const { data: session, error } = await supabase.auth.getSession();
  //   if (error) {
  //     console.log("Error getting session: ", error);
  //   } else {
  //     getSession(session);
  //   }
  // }

  console.log("Nav bar accessed");
  // console.log(session);

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 justify-between">
        <h2 className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-xl font-bold">
          <a href="/">⛳ Math Golf </a>
        </h2>

        <div className="sm:ml-6  sm:space-x-8">
          {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
          <Link
            href="/leaderboard"
            className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900"
          >
            Leaderboard
          </Link>
          <Link
            href="/"
            className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            How To Play
          </Link>

          <Link
            href="/auth/login"
            className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            Log In
          </Link>

          <Link
            href="/auth/signout"
            className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            Sign Out
          </Link>

          <Link
            href="/profile"
            className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            Profile
          </Link>

          <Link
            href="/game"
            className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            Play now!
          </Link>
        </div>
      </div>
    </div>
  );
}
