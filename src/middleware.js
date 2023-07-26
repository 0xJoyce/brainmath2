//If your directory has a /src, the middleware.js does NOT go into the root.  Instead, it needs to go into /src.

import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware(req) {
  console.log("Middleware function executed");
  const res = NextResponse.next();
  // console.log(res);
  const supabase = createMiddlewareClient({ req, res });
  const data = await supabase.auth.getSession();
  const session = data.data.session; /// I fixed this all by myself!! whee!  Is there a better way?

  if (supabase) {
    console.log("Connection to Supabase successful.");
  } else {
    console.log("No Supabase connection.");
  }

  if (data) {
    console.log("The data is: ");
    console.log(data);
  } else {
    console.log("No data found.");
  }

  if (session) {
    console.log("The session is: ");
    console.log(session);
    console.log("The user ID retrieved from session is: ");
    const userID = session.user.id;
    console.log(userID);
  } else {
    console.log("No session found.");
  }

  if (session == null && req.nextUrl.pathname !== "/") {
    console.log("Middleware redirected to home route.");
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/game", "/game/scores", "/profile"],
};
