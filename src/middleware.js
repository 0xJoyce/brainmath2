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

  // console.log(session);

  if (session == null && req.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/game", "/game/scores", "/profile"],
};
