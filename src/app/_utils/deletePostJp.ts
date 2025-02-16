const deletePostJp = async (id: number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete data');
  }
  return id;
};

export default deletePostJp;
