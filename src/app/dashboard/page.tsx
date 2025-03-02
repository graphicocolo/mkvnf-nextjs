import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { createClient } from '@/utils/supabase/server';

const DashboardPage = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const message = `Logged in as ${user?.email}`;
  return (
    <div className="my-10 flex w-full justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p>ログイン済み</p>
            <p>{message}</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild>
            <Link href="/">トップページへ</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DashboardPage;
