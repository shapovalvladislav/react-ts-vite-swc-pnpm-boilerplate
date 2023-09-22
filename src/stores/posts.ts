import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

import { IPost } from '@/utils/interfaces/posts';

interface IAuthStore {
  getPosts: () => Promise<IPost[]>;
}

export const usePostsStore = createWithEqualityFn<IAuthStore>(
  () => ({
    getPosts: async () => {
      const response = await fetch(`${import.meta.env.VITE_API_HOST}/posts`);
      const posts = await response.json();
      return posts;
    },
  }),
  shallow,
);
