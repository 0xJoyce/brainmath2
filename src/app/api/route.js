import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function GET(req) {
  const res = NextResponse.next();
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
  );

  const gameParameters = await supabase
    .from("daily_game_parameter")
    .select("*");

  console.log(gameParameters);

  return NextResponse.json(gameParameters);
}
