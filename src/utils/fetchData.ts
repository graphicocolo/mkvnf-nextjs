export const fetchData = async (url: string): Promise<any> => {
  const response = await fetch(url); // API リクエストを送信
  if (!response.ok) {
    throw new Error('Failed to fetch data'); // エラーをスロー
  }
  return response.json(); // JSON 形式のデータを返す
};
