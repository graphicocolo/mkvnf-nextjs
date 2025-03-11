import { fetchData } from '@/utils/fetchData';

// 通常の fetch
// fetch は Web API であり、通常は ブラウザ環境 で利用される関数です。
// fetch(url) を呼び出すことで、HTTP リクエストを送信できます。
// しかし、Node.js には fetch がデフォルトで含まれていません（Node.js v18以降では fetch がネイティブでサポートされていますが、それ以前のバージョンでは node-fetch などを使う必要がありました）。

// global.fetch の役割 fetch を Jest でモック化し、実際の API にはリクエストを送信しない
// Jest のテスト環境では、Node.js を使用するため fetch は存在しません。
// そのため、global.fetch = jest.fn(...) を使って、Jest のモック関数として fetch を定義し、テスト環境で fetch をエミュレート しています。

// global.fetch を Jest の jest.fn() でモック化し、テスト環境で fetch をシミュレーション
// テスト環境で fetch を使う場合は、global.fetch をモック化するのが一般的な手法
global.fetch = jest.fn(() =>
  // デフォルトの挙動として、成功したレスポンス（ok: true）を返し、json() メソッドが { data: 'test data' } を返すように設定
  Promise.resolve({
    // Promise.resolve(...) を返すことで、fetch が 非同期処理 であることを再現
    ok: true, // ok: true にすることで、成功した HTTP レスポンス を模擬
    json: () => Promise.resolve({ data: 'test data' }), // json() メソッドが { data: 'test data' } を返すように設定
  }),
) as jest.Mock;

describe('fetchData function', () => {
  // 正常系（成功パターン）
  // 目的:
  // fetchData を呼び出したとき、正常なデータ { data: 'test data' } が返ってくることを確認する。
  test('fetches data successfully', async () => {
    const data = await fetchData('https://api.example.com');
    expect(data).toEqual({ data: 'test data' }); // 返り値が期待通りであることを検証
  });

  // 異常系（失敗パターン）
  // 目的:
  // API のレスポンスが失敗（ok: false）だった場合に、fetchData が Error('Failed to fetch data') をスローすることを確認する
  test('throws an error when response is not ok', async () => {
    // global.fetch を再度モック化し、ok: false を返すように変更
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      }),
    ) as jest.Mock;

    await expect(fetchData('https://api.example.com')).rejects.toThrow('Failed to fetch data'); // fetchData がエラーを投げることを検証
  });
});
