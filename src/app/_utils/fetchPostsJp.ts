interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPostsJp = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return (await res.json()) as Post[];
};

export default fetchPostsJp;
