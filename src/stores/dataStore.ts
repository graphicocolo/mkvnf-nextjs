import { create } from 'zustand';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface DataState {
  data: Post[];
  fetchData: () => Promise<void>;
}

const useDataStore = create<DataState>((set) => ({
  data: [],
  fetchData: async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const jsonData = (await response.json()) as Post[];
    set({ data: jsonData });
  },
}));

export default useDataStore;
