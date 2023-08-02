"use client";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function AuthForm() {
  const supabase = createClientComponentClient();
  console.log("Accessing AuthForm component.");

  return (
    <Auth
      supabaseClient={supabase}
      view="sign_up"
      appearance={{ theme: ThemeSupa }}
      theme="dark"
      showLinks={false}
      providers={["google"]}
      // redirectTo={"https://brainmath2-91daepu1d-0xjoyce.vercel.app/auth/login"}
      redirectTo={`${process.env.VERCEL_URL}/auth/callback`} // This still works on local host. why?
    />
  );
}
