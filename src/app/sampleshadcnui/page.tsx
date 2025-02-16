import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import CallToast from '@/app/_components/CallToast';

const SampleshadcnuiPage = () => {
  return (
    <div>
      <h1>sampleshadcnui/page</h1>
      <div className="flex justify-center gap-4 p-10">
        <Button>default</Button>
        <Button variant="destructive">destructive</Button>
        <Button variant="outline">outline</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="link">link</Button>
        <Button size="sm">small</Button>
        <Button size="lg">large</Button>
      </div>
      <div className="flex justify-center gap-4 p-10">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">ログイン</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>ログインする</DialogTitle>
              <DialogDescription>こちらからログインしてください</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="email">
                  email
                </Label>
                <Input className="col-span-3" id="email" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right" htmlFor="password">
                  password
                </Label>
                <Input className="col-span-3" id="password" type="password" />
              </div>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="submit">ログイン</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex justify-center gap-4 p-10">
        <CallToast />
      </div>
    </div>
  );
};

export default SampleshadcnuiPage;
