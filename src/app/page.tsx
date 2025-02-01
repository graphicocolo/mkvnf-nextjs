import { Test } from '@/app/components/Test';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>トップページです</h1>
      <Test />
    </main>
  );
};

export default Home;
