'use client';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

import { createClient } from '@/utils/supabase/client';

export default function SignOut() {
  const supabase = createClient();
  const router = useRouter();
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh(); // This is a workaround to refresh the page. In a real app, you would use the
  };
  return <Button onClick={() => void handleSignOut()}>ログアウト</Button>;
}
