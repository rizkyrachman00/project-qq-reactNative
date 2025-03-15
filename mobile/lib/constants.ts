let supabaseUrl: string = '';
let supabaseAnonKey: string = '';

if (!process.env.EXPO_PUBLIC_SUPABASE_URL || !process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY) {
  console.log('constants.ts', 'Make sure you have a `.env` file to populate your variables.');
} else {
  supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
  supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;
}

export const SUPABASE_URL = supabaseUrl;
export const SUPABASE_ANON_KEY = supabaseAnonKey;

// console.log('SUPABASE: ', SUPABASE_ANON_KEY, SUPABASE_URL);
