'use server'; // サーバーアクションを使う際、指定

import { revalidatePath } from 'next/cache';

const createPostJp = async (formData: FormData) => {
  // フォームデータを取得
  const title = formData.get('title')?.toString();
  const content = formData.get('content')?.toString();

  if (!title || !content) {
    throw new Error('Title and Content are required');
  }

  await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, content }),
  });

  // キャッシュをクリア（クライアント側のリロードはされない）
  revalidatePath('/posts');
};

export default createPostJp;
