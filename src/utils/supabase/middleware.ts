import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) => supabaseResponse.cookies.set(name, value, options));
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // トップページのみを除外したい場合
  // const publicPaths: string[] = [];
  // if (request.nextUrl.pathname === '/') {
  //   return supabaseResponse;
  // }

  const publicPaths = ['/login', '/auth', '/signup']; // ここに認証不要のパスを追加

  // if (request.nextUrl.pathname === '/' || publicPaths.some((path) => request.nextUrl.pathname.startsWith(path))) {
  //   return supabaseResponse;
  // }
  if (publicPaths.some((path) => request.nextUrl.pathname.startsWith(path))) {
    return supabaseResponse;
  }

  if (!user) {
    // no user, potentially respond by redirecting the user to the login page
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
