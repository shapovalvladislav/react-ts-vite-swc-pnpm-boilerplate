import { Backdrop, CircularProgress } from '@mui/material';

import { useAppStore } from '@/stores/app';

const Z_INDEX = 1000;

export const Loading: React.FC = () => {
  const isLoading = useAppStore((state) => state.loading);

  return (
    <Backdrop
      sx={{ zIndex: (theme) => theme.zIndex.drawer + Z_INDEX }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
