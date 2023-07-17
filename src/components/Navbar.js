"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 justify-between">
        <h2 className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-xl font-bold">
          <a href="/">⛳ Math Golf </a>
        </h2>
        <div className="sm:ml-6  sm:space-x-8">
          {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
          <Link
            href="#"
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
          {/* {  This fix was done by Mat.  But, it turns out it was not needed when I change the POST to GET method becauase Link components automatically do Get requests apparently.  Keenan pointed this out to me. */}
          {/*             
          <div>
            <form action="/auth/signout" method="post">
              <button className="button block" type="submit">
                Sign out
              </button>
            </form>
          </div> */}
          <Link
            href="/auth/signout"
            className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            Log Out
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
