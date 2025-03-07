'use client';

import useAppStore from '@/stores/customStore';

const ExampleComponent = () => {
  // ストアからデータと更新関数を取得
  const data = useAppStore((state) => state.data);
  const setData = useAppStore((state) => state.setData);

  return (
    <div className="my-4 rounded border p-4 shadow">
      {/* 現在のデータを表示 */}
      <p>現在のデータ: {data}</p>

      {/* ボタンクリックでデータを更新 */}
      <button onClick={() => setData('新しいデータ')}>データを更新</button>

      {/* 入力フォームでデータを更新 */}
      <input onChange={(e) => setData(e.target.value)} placeholder="データを入力" type="text" value={data} />
    </div>
  );
};

export default ExampleComponent;
