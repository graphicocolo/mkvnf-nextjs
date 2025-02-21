// シンプルな例（クライアントコンポーネント）
// 'use client';
// import { Suspense, useState, useEffect } from 'react';

// const SlowComponent = () => {
//   const [data, setData] = useState<string | null>(null);

//   useEffect(() => {
//     setTimeout(() => setData('データ取得完了！'), 2000);
//   }, []);

//   return <p>{data || 'Loading...'}</p>;
// };

// const SamplesuspensePage = () => {
//   return (
//     <div>
//       <h1>Suspense の基本</h1>
//       <Suspense fallback={<p>Loading...</p>}>
//         <SlowComponent />
//       </Suspense>
//     </div>
//   );
// };

// export default SamplesuspensePage;

// 例: サーバーコンポーネントでデータ取得
// import { Suspense } from 'react';

// const fetchData = async () => {
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   return 'サーバーからのデータ';
// };

// const DataComponent = async () => {
//   const data = await fetchData();
//   return <p>{data}</p>;
// };

// const SamplesuspensePage = () => {
//   return (
//     <div>
//       <h1>サーバーコンポーネントの Suspense</h1>
//       <Suspense fallback={<p>Loading server data...</p>}>
//         <DataComponent />
//       </Suspense>
//     </div>
//   );
// };

// export default SamplesuspensePage;

// 例: 複数のデータ取得コンポーネント
import { Suspense } from 'react';

const fetchUser = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return 'ユーザー情報';
};

const fetchPosts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return '投稿一覧';
};

const UserComponent = async () => {
  const user = await fetchUser();
  return <p>{user}</p>;
};

const PostsComponent = async () => {
  const posts = await fetchPosts();
  return <p>{posts}</p>;
};

const SamplesuspensePage = () => {
  return (
    <div>
      <h1>複数の Suspense</h1>
      <Suspense fallback={<p>ユーザー情報を読み込み中...</p>}>
        <UserComponent />
      </Suspense>
      <Suspense fallback={<p>投稿一覧を読み込み中...</p>}>
        <PostsComponent />
      </Suspense>
    </div>
  );
};

export default SamplesuspensePage;
