import { NextResponse } from 'next/server';

// The client you created from the Server-Side Auth instructions
import { createClient } from '@/utils/supabase/server';

export async function GET(request: Request) {
  // 1. ブラウザからのリクエストURLからパラメータを取得
  // 認証プロバイダー（例：GoogleやGitHubなど）からリダイレクトされた際のパラメータを取得するために使用されてい
  // URLオブジェクトを分解（デストラクチャリング）して、searchParamsとoriginという2つの重要な部分を取り出している
  // origin http://localhost:3000" や "https://your-app.com"
  // 内容: プロトコル（http/https）+ ドメイン + ポート番号（存在する場合）
  // リクエストのURLから取得される基本的なURL部分
  // searchParams: クエリパラメータやフォームデータなどの追加情報を含むオブジェクト ?code=abc123&next=/dashboard など
  // 内容: URLのクエリパラメータを管理するURLSearchParamsオブジェクト
  // リクエストURLの?以降のクエリ文字列部分
  const { searchParams, origin } = new URL(request.url);
  // 認証プロバイダーからのリクエストにはcodeパラメータが含まれている
  const code = searchParams.get('code');
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get('next') ?? '/';

  if (code) {
    const supabase = await createClient();
    // 2. 認証コードをセッションと交換
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      console.error('認証エラー:', error);
      return NextResponse.redirect(`${origin}/auth/auth-code-error`);
    }
    if (!error) {
      // X-Forwarded-For はプロキシやロードバランサーを介してリクエストが来る際に、それらが付与したクライアントの発信元IP アドレスを示す HTTPヘッダー
      const forwardedHost = request.headers.get('x-forwarded-host'); // original origin before load balancer
      // process.env.NODE_ENVは、Node.jsの環境変数で、アプリケーションの実行環境を示す
      const isLocalEnv = process.env.NODE_ENV === 'development';

      // ローカル環境ではX-Forwarded-Hostが存在しないため、originを使用してリダイレクト
      if (isLocalEnv) {
        // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
        return NextResponse.redirect(`${origin}${next}`);
      } else if (forwardedHost) {
        return NextResponse.redirect(`https://${forwardedHost}${next}`);
      } else {
        return NextResponse.redirect(`${origin}${next}`);
      }
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
