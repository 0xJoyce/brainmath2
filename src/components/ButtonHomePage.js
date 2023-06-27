//What is the problem with "Let?"

"use client";

import { useRouter } from "next/navigation"; //Changed from next/router.  When i used router it didn't mount.

export default function HomePageButton() {
  const router = useRouter();

  return (
    <div>
      <button
        type="button"
        className="rounded-full bg-lime-300 px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={() => router.push("../game")}
      >
        {"Let's Play"}
      </button>
    </div>
  );
}
