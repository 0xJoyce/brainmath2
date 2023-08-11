import { cookies } from "next/headers";
import AccountForm from "../../components/AccountForm";
import { createServerSupabaseClient } from "../../../lib/hack";

export default async function Account() {
  const supabase = createServerSupabaseClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return <AccountForm session={session} />;
}
