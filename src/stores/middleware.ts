import { StateCreator } from 'zustand';

export const log =
  <T extends object>(config: StateCreator<T>): StateCreator<T> =>
  (set, get, api) =>
    config(
      (args) => {
        console.log('Action performed:', args);
        set(args);
      },
      get,
      api,
    );
