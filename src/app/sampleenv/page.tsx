const SampleenvPage = () => {
  const env = process.env.NEXT_PUBLIC_API_URL;
  return (
    <div>
      <h1>SampleenvPage</h1>
      <p>{env}</p>
    </div>
  );
};

export default SampleenvPage;
