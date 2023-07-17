"use client";

import { supabase } from "../../lib/supabase";
import { useRouter } from "next/router";


export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error);
      return;
    }

    router.push("/login");
  }

  return <button onClick={handleLogout}>Logout</button>;
}
