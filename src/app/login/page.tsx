'use server';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { login, loginGoogle } from './actions';

const SignUpPage = () => {
  return (
    <>
      <div className="my-10 flex w-full justify-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>ログイン</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={login} id="signup">
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">メールアドレス</Label>
                  <Input id="email" name="email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">パスワード</Label>
                  <Input id="password" name="password" type="password" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button form="signup" type="submit">
              ログイン
            </Button>
            <div className="w-full border"></div>
            <form action={loginGoogle} id="login-google"></form>
            <Button form="login-google" type="submit">
              Googleでログイン
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Link href="/signup">ユーザー登録がまだですか？</Link>
    </>
  );
};

export default SignUpPage;
