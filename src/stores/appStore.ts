import { create } from 'zustand';

interface AppState {
  count: number;
  user: {
    name: string;
    age: number;
  };
  increment: () => void;
  updateUser: (name: string, age: number) => void;
}

const useAppStore = create<AppState>((set) => ({
  count: 0,
  user: {
    name: 'John',
    age: 30,
  },
  increment: () => set((state) => ({ count: state.count + 1 })),
  updateUser: (name, age) => set(() => ({ user: { name, age } })),
}));

export default useAppStore;
