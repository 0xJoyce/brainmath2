"use client";

import Link from "next/link";

export default function HomePageButton() {
  return (
    <div>
      <Link
        href="/game"
        className="rounded-full bg-lime-300 px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Enter the club
      </Link>
    </div>
  );
}
