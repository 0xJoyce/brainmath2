"use client";

import { useContext, createContext } from "react";

export const TodayParameter = createContext({
  todayParameter: null,
});

export const useGameParameter = () => useContext(TodayParameter); //Note: useGameParameter is a function that needs to be invoked.

export default function GameParameter({ children, todayParameter }) {
  console.log("Accessing GameParameter component.");
  return (
    <TodayParameter.Provider value={{ todayParameter }}>
      {children}
    </TodayParameter.Provider>
  );
}
