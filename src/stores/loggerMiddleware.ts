import { StateCreator } from 'zustand';

// カスタムミドルウェア 状態が変更されるたびに、変更前と変更後の状態をコンソールに出力
export const loggerMiddleware =
  <T extends object>(config: StateCreator<T>): StateCreator<T> =>
  (set, get, api) =>
    config(
      (args) => {
        console.log('Previous State:', get());
        set(args);
        console.log('Next State:', get());
      },
      get,
      api,
    );

export default loggerMiddleware;
