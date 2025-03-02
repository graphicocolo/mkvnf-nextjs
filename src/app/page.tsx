import SignOut from '@/app/_components/SignOut';
import { Test } from '@/app/_components/Test';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
};

const HomePage = () => {
  return (
    <>
      <SignOut />
      <h1 className="m-5 text-2xl font-medium md:text-center">Home</h1>
      <Test />
    </>
  );
};

export default HomePage;
