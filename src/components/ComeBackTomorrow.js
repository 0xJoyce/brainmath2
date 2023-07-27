"use client";
import Link from "next/link";

export default function ComeBackTomorrow() {
  console.log("Accessed ComeBackTomorrow component.");

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 h-screen overflow-auto flex items-center justify-center">
      <div>
        <h1 className="mb-10 text-3xl">
          You already played today. Come back tomorrow. New game daily!
        </h1>
        <Link
          href="/"
          className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Home Page
        </Link>
      </div>
    </div>
  );
}
