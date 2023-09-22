import { Box, Paper } from '@mui/material';

import { IPost } from '@/utils/interfaces/posts';

export default function Post({ post }: { post: IPost }) {
  return (
    <Paper elevation={2}>
      <Box padding="12px">
        <h3>{post.title}</h3>
        <span>{post.body}</span>
      </Box>
    </Paper>
  );
}
