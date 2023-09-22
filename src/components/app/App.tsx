import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { I18nextProvider } from 'react-i18next';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppBar from '../app-bar/AppBar';
import { Loading } from '../loading/Loading';

import i18n from './I18n';
import { theme } from './Theme';

import HomePage from '@/pages/home/Home';
import { useAuthStore } from '@/stores/auth';
import PostsPage from '@/pages/posts/Posts';

const queryClient = new QueryClient();

const PageLayout = () => (
  <Box width="100%" height="100%">
    <AppBar />
    <Outlet />
    <Loading />
  </Box>
);

const PrivateOutlet = () => {
  const loggedIn = useAuthStore((state) => !!state.idToken);
  return loggedIn ? <Outlet /> : <Navigate to="/" />;
};

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        element: <PrivateOutlet />,
        children: [
          {
            path: '/posts',
            element: <PostsPage />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </I18nextProvider>
  );
}
