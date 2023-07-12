import { createClient } from "@supabase/supabase-js";

import GameParameter from "@/components/GameParameter";

async function getData() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
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
    return null; //If this is null, shouldn't it provide the default values instead?
  } else {
    return data;
  }
}

export default async function GamePageLayout({ children }) {
  const todayParameter = await getData();

  return (
    <GameParameter todayParameter={todayParameter}>{children}</GameParameter>
  );
}
