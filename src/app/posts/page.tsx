// 修正前
// import createPostJp from '@/app/_actions/createPostJp';

// interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// const PostPage = async () => {
//   const res: Response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const posts = (await res.json()) as Post[]; // 型アサーション

//   return (
//     <>
//       <h1 className="m-5 text-2xl font-medium md:text-center">Posts List</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>
//             <h2>{post.title}</h2>
//             <p>{post.body}</p>
//           </li>
//         ))}
//       </ul>
//       <form action={createPostJp} className="mt-5 text-center">
//         <input
//           className="w-full rounded border border-gray-300 p-2"
//           name="title"
//           placeholder="Title"
//           required
//           type="text"
//         />
//         <textarea
//           className="mt-5 w-full rounded border border-gray-300 p-2"
//           name="content"
//           placeholder="Content"
//           required
//         ></textarea>
//         <button className="rounded bg-blue-500 px-4 py-2 text-white" type="submit">
//           Submit
//         </button>
//       </form>
//     </>
//   );
// };

// export default PostPage;

'use client';

import { useState, useEffect } from 'react';

import createPostJp from '@/app/_actions/createPostJp';

// 投稿オブジェクトの型を定義
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    // 既存データ取得関数
    // コンポーネントのマウント時に投稿データを取得
    // データ取得に失敗した場合はエラーメッセージを表示
    const fetchPosts = async () => {
      try {
        const res: Response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = (await res.json()) as Post[];
        setPosts(data);
      } catch (error) {
        // fetchPosts関数内で発生するエラー
        // fetch() が失敗した場合のエラーをキャッチ
        // 具体的なエラー発生ケース
        // ネットワークエラーで fetch 自体が失敗
        // json() の解析時に SyntaxError が発生
        console.error('Error fetching posts:', error);
      }
    };
    // ここでさらにエラーをcatchしている意味は？
    // fetchPosts は async 関数なので、呼び出し時に Promise を返す
    // useEffect は async 関数を直接受け付けないため、fetchPosts() を通常の関数として実行
    // しかし、もし fetchPosts() の実行時に 予期しない理由でエラーが発生すると、そのエラーは useEffect の外部に伝播する可能性がある
    // そのため、fetchPosts() の呼び出し時にエラーが発生した場合に備えて、catch() メソッドを使用してエラーをキャッチする
    // もし fetchPosts() の実行時に 予期しない理由でエラーが発生すると、そのエラーは useEffect の外部に伝播する 可能性がある
    // 具体的なエラー発生ケース
    // fetchPosts の呼び出しが間違った形式で行われる
    // useEffect の内部処理が想定外の理由で失敗
    fetchPosts().catch((error) => console.error('Error in useEffect:', error));
  }, []);

  // フォーム送信時に呼び出され、新しい投稿を作成
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);

    // サーバーに新しい投稿を送信
    await createPostJp(formData);

    const newPost: Post = {
      userId: 1,
      id: posts.length + 1,
      title,
      body: content,
    };

    // ローカルの状態を更新
    // このコードの意味は？
    // スプレッド構文 (...) を使うことで、posts の中身を展開
    // 新しい投稿を配列の先頭に追加
    setPosts([newPost, ...posts]);
    // 末尾に追加する場合は、setPosts([...posts, newPost]);
    setTitle('');
    setContent('');
  };

  // handleSubmitをラップし、エラーハンドリングを追加
  const handleFormSubmit = (e: React.FormEvent) => {
    // ここでエラーをcatchしている意味は？
    // handleSubmit は async 関数なので、呼び出し時に Promise を返す
    // form の submit イベントは、デフォルトでページのリロードを引き起こす
    // このため、handleSubmit が失敗した場合には、ページがリロードされる前にエラーをキャッチする必要がある
    // このため、handleFormSubmit 関数内で handleSubmit を呼び出す際に、catch() メソッドを使用してエラーをキャッチする
    handleSubmit(e).catch((error) => console.error('Error in handleSubmit:', error));
  };

  return (
    <>
      <h1 className="m-5 text-2xl font-medium md:text-center">Posts List</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <form className="mt-5 text-center" onSubmit={handleFormSubmit}>
        <input
          className="w-full rounded border border-gray-300 p-2"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
          type="text"
          value={title}
        />
        <textarea
          className="mt-5 w-full rounded border border-gray-300 p-2"
          name="content"
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
          value={content}
        ></textarea>
        <button className="rounded bg-blue-500 px-4 py-2 text-white" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default PostPage;
