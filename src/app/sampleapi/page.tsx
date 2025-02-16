// pages/index.tsx

import HelloWorldWithApi from '@/app/_components/HelloWorldWithApi';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Next.js</h1>
      <HelloWorldWithApi /> {/* API呼び出し結果を表示するコンポーネント */}
    </div>
  );
};

export default Home;
