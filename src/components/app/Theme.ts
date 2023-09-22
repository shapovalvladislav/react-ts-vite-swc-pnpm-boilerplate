import { createTheme } from '@mui/material/styles';

// Theme overrides for MUI
export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1024,
      xl: 1280,
    },
  },
  // Other overrides here
});
