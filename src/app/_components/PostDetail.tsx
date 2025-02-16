'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';

import deletePostJp from '../_utils/deletePostJp';
import fetchPostJp from '../_utils/fetchPostJp';

const PostDetail = ({ id }: { id: number }) => {
  const queryClient = useQueryClient();
  // const router = useRouter();
  const postId = id;

  const { data, error, isLoading } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => fetchPostJp({ id: postId }),
  });

  const mutation = useMutation({
    mutationFn: () => deletePostJp(postId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['posts'] });
      console.log('Post deleted successfully!');
      // router.push('/sampletanstack1');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mutation.isPending) return;
    mutation.mutate();
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading post</div>;

  return (
    <div>
      <Link href="/sampletanstack1">Back to Posts</Link>
      <form className="mt-5" onSubmit={handleSubmit}>
        <h1>Post Detail {data?.id}</h1>
        <p>{data?.title}</p>
        <p>{data?.body}</p>
        <button
          className="w-full rounded bg-blue-500 p-2 text-white hover:bg-blue-600 disabled:opacity-50"
          disabled={mutation.isPending}
          type="submit"
        >
          {mutation.isPending ? 'Deleting...' : 'Delete Post'}
        </button>
      </form>
      {mutation.isPending && <div className="mt-4 text-yellow-500">Deleting post...</div>}
      {mutation.isError && <div className="mt-4 text-red-500">Error Deleting post</div>}
      {mutation.isSuccess && <div className="mt-4 text-green-500">Post Deleted successfully!</div>}
    </div>
  );
};

export default PostDetail;
