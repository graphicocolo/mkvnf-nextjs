// 公式のコード
// import { createServerClient, type CookieOptions } from "@supabase/ssr";
// import { cookies } from "next/headers";

// export const createClient = (cookieStore: ReturnType<typeof cookies>) => {
//   return createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         getAll() {
//           return cookieStore.getAll()
//         },
//         setAll(cookiesToSet) {
//           try {
//             cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
//           } catch {
//             // The `setAll` method was called from a Server Component.
//             // This can be ignored if you have middleware refreshing
//             // user sessions.
//           }
//         },
//       },
//     },
//   );
// };

// 公式のコードをちょっと修正したコード
// import { createServerClient } from '@supabase/ssr';
// import { cookies } from 'next/headers';

// export const createClient = (cookieStore: ReturnType<typeof cookies>) => {
//   return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
//     cookies: {
//       async getAll() {
//         return (await cookieStore).getAll();
//       },
//       setAll(cookiesToSet) {
//         try {
//           // @ts-expect-error Server Component内でのcookie操作
//           // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
//           cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
//         } catch {
//           // The `setAll` method was called from a Server Component.
//           // This can be ignored if you have middleware refreshing
//           // user sessions.
//         }
//       },
//     },
//   });
// };

// 講座のコード
// import { createServerClient } from '@supabase/ssr';
// import { cookies } from 'next/headers';

// export async function createClient() {
//   const cookieStore = await cookies();

//   return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
//     cookies: {
//       getAll() {
//         return cookieStore.getAll();
//       },
//       setAll(cookiesToSet) {
//         try {
//           cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
//         } catch {
//           // The `setAll` method was called from a Server Component.
//           // This can be ignored if you have middleware refreshing
//           // user sessions.
//         }
//       },
//     },
//   });
// }

// 公式のコードを修正したもの
// import { createServerClient } from '@supabase/ssr';
// import { cookies } from 'next/headers';

// export const createClient = async () => {
//   // Promiseを解決してからcookieStoreを使用
//   // cookieStoreは ReadonlyRequestCookies として扱える
//   const cookieStore = await cookies();
//   return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
//     cookies: {
//       getAll() {
//         return cookieStore.getAll();
//       },
//       setAll(cookiesToSet) {
//         try {
//           cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options)); // 解決済みのcookieStoreに対してsetを呼べる
//         } catch {
//           // The `setAll` method was called from a Server Component.
//           // This can be ignored if you have middleware refreshing
//           // user sessions.
//         }
//       },
//     },
//   });
// };

// 型を自動生成後のコード
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

import { Database } from '@/types/database.types';

export const createClient = async () => {
  const cookieStore = await cookies();
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
};
