// 6章で使用する関数
const createPostJp = async (newPost: { title: string; body: string }) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPost),
  });
  return res.json();
};

// interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// フロントで ID を付与するコード
// これでも結局postsには新規投稿が反映されなかった
// const createPostJp = async (newPost: { title: string; body: string }) => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newPost),
//   });

//   const data = (await response.json()) as Post[];

//   // jsonplaceholder の仕様上、新規投稿時に ID が正しく返らないことがあるのでフロントで ID を付与
//   return { ...data, id: Date.now() }; // 一時的なIDを付与
// };

export default createPostJp;
