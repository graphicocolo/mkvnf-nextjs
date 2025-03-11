// Next.js で Supabase Auth がどんな仕組みで動いてるか調べました
// https://qiita.com/megmogmog1965/items/37d7a4a3335f2758c861
import { createBrowserClient } from '@supabase/ssr';

import { Database } from '@/types/database.types';

export const createClient = () =>
  createBrowserClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
