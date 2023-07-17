import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

///This GET async function was changed from POST per Keenan.  Link components do GET requests by default.  This solves the Nav bar inconsistency issue.
export async function GET(req) {
  const supabase = createRouteHandlerClient({ cookies });

  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    await supabase.auth.signOut();
  }

  return NextResponse.redirect(new URL("/", req.url), {
    status: 302,
  });
}
