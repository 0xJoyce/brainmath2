/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
    winNum: process.env.winNum,
    startNum: process.env.startNum,
    increment: process.env.increment,
    decrement: process.env.decrement,
  },
};

module.exports = nextConfig;
