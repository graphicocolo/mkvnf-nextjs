// 例: 外部 API からデータを取得して返す
// import { NextResponse } from 'next/server';

// interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// export const GET = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const posts = (await res.json()) as Post[];
//   return NextResponse.json(posts);
// };

// 例: POST リクエストの処理

// import { NextResponse } from 'next/server';

// interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// export const POST = async (req: Request) => {
//   const body: Post = await req.json();
//   console.log(body); // リクエストから受け取ったデータを処理
//   return NextResponse.json({ status: 'Success', data: body });
// };
