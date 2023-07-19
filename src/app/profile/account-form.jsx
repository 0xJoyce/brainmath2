//This needs to be fixed later.  There is a msg box in browser that says "Error loading user data."  7/19/2023
"use client";
import { useCallback, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";

export default function AccountForm({ session }) {
  const supabase = createClientComponentClient();
  const [loading, setLoading] = useState(true);

  const user = session?.user;

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from("users")
        .select(`username`)
        .eq("id", user?.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  const fullName = session?.user.user_metadata.name;

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 h-screen items-center justify-center">
      <div>
        <h1>Great to see you here, {fullName}!</h1>
        <h1>We have {session?.user.email} on file for you.</h1>
        <h1>Username functionality coming soon.</h1>
      </div>

      <div>
        <Link
          href="/auth/signout"
          className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Sign Out
        </Link>
      </div>
    </div>
  );
}
