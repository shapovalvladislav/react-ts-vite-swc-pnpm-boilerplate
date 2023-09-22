import { Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

import Post from './components/Post';

import { usePostsStore } from '@/stores/posts';
import { useAppStore } from '@/stores/app';

export default function PostsPage() {
  const setLoading = useAppStore((state) => state.setLoading);
  const getPosts = usePostsStore((state) => state.getPosts);

  const { isLoading, data } = useQuery(['get-posts'], () => getPosts(), {
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);

  if (isLoading) return null;

  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Box
        display="flex"
        flexDirection="column"
        maxWidth="900px"
        paddingTop="24px"
        gap="16px"
      >
        {data?.map((post) => <Post key={post.id} post={post} />)}
      </Box>
    </Box>
  );
}
