'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

import fetchPostsJp from '@/app/_utils/fetchPostsJp';

const Sampletanstack1Page = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPostsJp,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-3xl font-bold">Posts</h1>
      <Link href="/sampletanstack1/createpost">投稿する</Link>
      <ul className="mt-5 space-y-4">
        {data?.map((post) => (
          <li className="rounded border p-4 shadow" key={post.id}>
            <h2 className="mb-2 text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
            <Link className="hover:text-blue-500 hover:underline" href={`/sampletanstack1/post/detail/${post.id}`}>
              詳細を見る
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sampletanstack1Page;
