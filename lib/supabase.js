//Chris: What is a lib for?  Supabase's AI suggested this route: In a Next.js app with an app router, you can save the supabase.js file in the lib directory. This is a common convention for storing utility files in Next.js apps.

//SupaAI: By convention, the lib directory is used for storing utility files that can be used across your app. This makes it easy to organize your code and keep your app components clean and focused on their specific functionality.

import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
