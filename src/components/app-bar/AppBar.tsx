import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import LoginDialog from '../login-dialog/LoginDialog';
import { LanguagePicker } from '../language-picker/LanguagePicker';

import { useAuthStore } from '@/stores/auth';

export default function ButtonAppBar() {
  const { t } = useTranslation();
  const [loginDlgOpen, setLoginDlgOpen] = useState(false);
  const [loggedIn, logOut] = useAuthStore((state) => [
    !!state.idToken,
    state.logOut,
  ]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Your awesome app
            </Typography>
            <Box marginRight="24px">
              <LanguagePicker />
            </Box>
            {loggedIn ? (
              <Button color="inherit" onClick={logOut}>
                {t('login.logout', 'Logout')}
              </Button>
            ) : (
              <Button onClick={() => setLoginDlgOpen(true)} color="inherit">
                {t('login.login', 'Login')}
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>

      <LoginDialog open={loginDlgOpen} onClose={() => setLoginDlgOpen(false)} />
    </>
  );
}
