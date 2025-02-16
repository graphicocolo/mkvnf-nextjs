'use client';
import { Button } from '@/components/ui/button';

import { useToast } from '@/hooks/use-toast';

const CallToast = () => {
  const { toast } = useToast();
  return (
    <div className="flex justify-center gap-4 p-10">
      <Button onClick={() => toast({ title: 'タイトルはこちら', description: 'ここに概要を書く' })}>Show Toast</Button>
    </div>
  );
};

export default CallToast;
