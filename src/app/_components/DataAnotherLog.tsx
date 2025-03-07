'use client';

import useAppStore from '@/stores/customStore';

const AnotherComponent = () => {
  const data = useAppStore((state) => state.data);

  return (
    <div className="rounded border p-4 shadow">
      <p>別のコンポーネントでも同じデータを表示: {data}</p>
    </div>
  );
};

export default AnotherComponent;
