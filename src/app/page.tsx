import Link from 'next/link';

import { Test } from '@/app/_components/Test';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>トップページです</h1>
      <Test />
      <Link href="about/">aboutページへ</Link>
    </main>
  );
};

export default Home;
