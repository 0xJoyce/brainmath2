//Chris: Should this be a server or client component?  Both works.
"use client";
import { createClient } from "@supabase/supabase-js";
import { useContext, createContext, useState, useEffect } from "react";

export const TodayParameter = createContext({}); //What should initial GameParameter be?

export const useGameParameter = () => useContext(TodayParameter); //Note: useGameParameter is a function that needs to be invoked.

async function getData() {
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
  );

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`; // Output: 2023-07-07

  const { data, error } = await supabase
    .from("game_parameter")
    .select("*")
    .eq("date", formattedDate)
    .single();

  if (error) {
    console.error("Error: ", error);
  } else {
    return data; //data is an object
  }
}

//ChatGPT said that it shouldn't be an async function and suggested this instead.  Need to talk thorugh this with Chris.
export default function GameParameter({ children }) {
  const [todayParameter, setTodayParameter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData()
      .then((data) => {
        setTodayParameter(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <TodayParameter.Provider value={{ todayParameter, loading }}>
      {children}
    </TodayParameter.Provider>
  );
}
