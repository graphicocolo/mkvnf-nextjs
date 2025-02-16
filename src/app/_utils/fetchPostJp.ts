interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// TanStack Query を使わない場合のコード
// const fetchPostsJp = async () => {
//   try {
//     // データを取得
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     if (!res.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const posts = (await res.json()) as Post[];
//     return posts;
//   } catch (error) {
//     // fetchPosts関数内で発生するエラー
//     // fetch() が失敗した場合のエラーをキャッチ
//     // 具体的なエラー発生ケース
//     // ネットワークエラーで fetch 自体が失敗
//     // json() の解析時に SyntaxError が発生
//     console.error('Error fetching posts:', error);
//   }
// };
// TanStack Query を使う場合のコード
const fetchPostJp = async ({ id }: { id: number }): Promise<Post> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const post = (await res.json()) as Post;
  return post;
};

export default fetchPostJp;
