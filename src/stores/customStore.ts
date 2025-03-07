import { create } from 'zustand';

import loggerMiddleware from '@/stores/loggerMiddleware';

interface AppState {
  data: string;
  setData: (newData: string) => void;
}

const useAppStore = create<AppState>(
  loggerMiddleware((set) => ({
    data: '',
    setData: (newData) => set({ data: newData }),
  })),
);

export default useAppStore;
