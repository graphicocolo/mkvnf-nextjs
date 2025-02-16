'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import { useState } from 'react';

import createPostJp from '@/app/_utils/createPostJp';

// API からの更新を待たずに、ローカルの queryClient のデータを即時更新する方法で使用
// interface Post {
//   userId?: number;
//   id: number;
//   title: string;
//   body: string;
// }

const CreatePostPage = () => {
  // const router = useRouter();
  const queryClient = useQueryClient();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // 新しく投稿したデータが Sampletanstack1Page に反映されないver
  const mutation = useMutation({
    mutationFn: createPostJp,
    onSuccess: async () => {
      // invalidateQueries() は非同期関数(Promise を返す)なので、await を使用
      await queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  // API からの更新を待たずに、ローカルの queryClient のデータを即時更新する方法
  // でも結局は Sampletanstack1Page に反映されないver
  // const mutation = useMutation({
  //   mutationFn: createPostJp,
  //   onMutate: async (newPost: { title: string; body: string }) => {
  //     await queryClient.cancelQueries({ queryKey: ['posts'] });

  //     // 現在のキャッシュデータを取得し、undefined の場合は空配列にする
  //     const previousPosts = queryClient.getQueryData<Post[]>(['posts']) ?? [];

  //     // 楽観的更新: クライアント側で先に追加する
  //     queryClient.setQueryData<Post[]>(['posts'], [{ id: Date.now(), ...newPost }, ...previousPosts]);

  //     return { previousPosts };
  //   },
  //   onError: (_error, _newPost, context) => {
  //     // エラー時はキャッシュを元に戻す
  //     if (context?.previousPosts) {
  //       queryClient.setQueryData(['posts'], context.previousPosts);
  //     }
  //   },
  //   onSettled: async () => {
  //     // 最終的に最新のデータを取得
  //     await queryClient.invalidateQueries({ queryKey: ['posts'] });
  //   },
  // });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title === '' || body === '') return;
    if (mutation.isPending) return;
    mutation.mutate(
      { title, body },
      {
        onSuccess: () => {
          setTitle('');
          setBody('');
          void queryClient.invalidateQueries({ queryKey: ['posts'] });
          console.log('Post created successfully!');
          // router.push('/sampletanstack1');
        },
        onError: () => {
          console.error('Error creating post');
        },
      },
    );
  };

  return (
    <div className="mx-auto mt-10 max-w-md rounded-lg bg-white p-6 shadow-md">
      <h1 className="mb-4 text-xl font-bold">Create Post </h1>
      <Link href="/sampletanstack1">投稿一覧へ</Link>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          className="w-full rounded border border-gray-300 p-2"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
          value={title}
        />
        <textarea
          className="w-full rounded border border-gray-300 p-2"
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
          value={body}
        />
        <button
          className="w-full rounded bg-blue-500 p-2 text-white hover:bg-blue-600 disabled:opacity-50"
          disabled={mutation.isPending}
          type="submit"
        >
          Create Post
        </button>
      </form>
      {mutation.isPending && <div className="mt-4 text-yellow-500">Creating post...</div>}
      {mutation.isError && <div className="mt-4 text-red-500">Error creating post</div>}
      {mutation.isSuccess && <div className="mt-4 text-green-500">Post created successfully!</div>}
    </div>
  );
};

export default CreatePostPage;
