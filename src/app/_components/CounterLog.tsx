'use client';

import useLoggedStore from '@/stores/loggedStore';

const Counter = () => {
  const { count, increment } = useLoggedStore();

  return (
    <div className="rounded border p-4 shadow">
      <p className="mb-4 text-lg">Count: {count}</p>
      <button className="mr-2 rounded bg-blue-500 px-4 py-2 text-white" onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
