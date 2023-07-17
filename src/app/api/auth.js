//Need to learn what this is.

import { supabase } from "../../supabase";

export default function handler(req, res) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  supabase.auth.signIn({ email }).then(({ error }) => {
    if (error) return res.status(401).json({ error: error.message });
    return res.status(200).json({ success: true });
  });
}
