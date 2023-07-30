//Problem:  When this route is called, log out is successful but it doesn't rerender to go to the / route.
//How do I fix this?  Right now, I have to actively hit refresh on the browser to
//make it forget the info so that /profile can no longer be accessed.

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

///This GET async function was changed from POST per Keenan.  Link components do GET requests by default.  This solves the Nav bar inconsistency issue.
export const dynamic = "force-dynamic"; //clodflare solution

export async function GET(req) {
  const supabase = createRouteHandlerClient({ cookies });
  console.log("Accessing /signout/route.js ");

  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    await supabase.auth.signOut();
    console.log("Logout successful.");
  }

  //adding here for testing.
  else if (!session) {
    console.log("No sessions found.");
  }

  return NextResponse.redirect(new URL("/", req.url), {
    status: 302,
  });
}
