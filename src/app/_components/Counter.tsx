'use client';

import useCounterStore from '@/stores/counterStore';

const Counter = () => {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div className="rounded border p-4 shadow">
      <p className="mb-4 text-lg">Count: {count}</p>
      <button className="mr-2 rounded bg-blue-500 px-4 py-2 text-white" onClick={increment}>
        Increment
      </button>
      <button className="rounded bg-red-500 px-4 py-2 text-white" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
