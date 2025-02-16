'use client'; // Reactコンポーネントとして使用する場合

import { useEffect, useState } from 'react';

interface Data {
  message: string;
}

const HelloWorldWithApi = () => {
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello'); // APIのパスを指定
        const data = (await response.json()) as Data;
        setMessage(data.message); // メッセージを受け取ってステートに設定
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // ロードが終わったらフラグを更新
      }
    };

    void fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // ローディング中の表示
  }

  return <div>{message}</div>; // メッセージ表示
};

export default HelloWorldWithApi;
