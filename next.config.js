/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SUPABASE_URL: process.env.NEXT_SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.NEXT_SUPABASE_ANON_KEY,
  },
};

module.exports = nextConfig;
