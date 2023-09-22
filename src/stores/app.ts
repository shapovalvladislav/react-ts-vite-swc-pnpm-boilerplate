import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

interface IAppStore {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useAppStore = createWithEqualityFn<IAppStore>(
  (set) => ({
    loading: false,
    setLoading: (loading) => {
      set(() => ({ loading }));
    },
  }),
  shallow,
);
