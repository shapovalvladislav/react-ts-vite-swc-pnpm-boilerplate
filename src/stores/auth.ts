import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';
import { persist } from 'zustand/middleware';

interface IAuthStore {
  idToken: string;
  logIn: (login: string, password: string) => Promise<void>;
  logOut: () => void;
}

export const useAuthStore = createWithEqualityFn<IAuthStore>()(
  persist(
    (set) => ({
      idToken: '',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      logIn: async (_login, _password) => {
        // Make API call here
        // Simulate API call
        await new Promise<void>((resolve) => {
          setTimeout(resolve, 2000);
        });
        set({ idToken: 'id-token-from-api-response' });
      },
      logOut: () => {
        set({ idToken: '' });
      },
    }),
    {
      name: 'auth-store',
      partialize: (state) => ({ idToken: state.idToken }),
    },
  ),
  shallow,
);
