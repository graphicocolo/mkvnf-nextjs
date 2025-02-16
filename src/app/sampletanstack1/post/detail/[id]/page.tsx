// https://nextjs.org/docs/app/building-your-application/upgrading/version-15
import PostDetail from '@/app/_components/PostDetail';

type Params = Promise<{ id: string }>;

const PostDetailPage = async (props: { params: Params }) => {
  const params = await props.params;
  const id = params.id;
  const parseId = Number(id);
  return <PostDetail id={parseId} />;
};

export default PostDetailPage;
