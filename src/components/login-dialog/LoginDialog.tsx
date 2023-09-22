import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { object, string, TypeOf } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import styles from './LoginDialog.module.scss';

import { useAuthStore } from '@/stores/auth';
import { useAppStore } from '@/stores/app';

interface IProps {
  onClose: () => void;
  open: boolean;
}

const loginSchema = object({
  username: string().min(1, 'login.username_is_required'),
  password: string().min(1, 'login.password_is_required'),
});

type LoginSchemaType = TypeOf<typeof loginSchema>;

export default function LoginDialog({ onClose, open }: IProps) {
  const setLoading = useAppStore((state) => state.setLoading);
  const logIn = useAuthStore((state) => state.logIn);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, isLoading } = useMutation(
    (data: LoginSchemaType) => {
      return logIn(data.username, data.password);
    },
    {
      onSuccess: () => {
        onClose();
        navigate('/posts');
      },
    },
  );

  useEffect(() => {
    if (open) reset();
  }, [open]);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  const onSubmitHandler: SubmitHandler<LoginSchemaType> = (data) => {
    mutate(data);
  };

  return (
    <Dialog
      open={open}
      onClose={() => onClose()}
      PaperProps={{
        className: styles.dialog,
      }}
    >
      <DialogTitle>{t('login.login', 'Login')}</DialogTitle>
      <DialogContent>
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            gap: '12px',
          }}
        >
          <Box display="flex" justifyContent="center">
            <img
              src={'/images/react.svg?url'}
              className={styles.loginImage}
              alt="login icon"
            />
          </Box>
          <DialogContentText sx={{ marginTop: '20px' }}>
            {t(
              'login.login_with_username_and_password',
              'Login with username and password',
            )}
          </DialogContentText>
          <Box
            display="flex"
            flexDirection="column"
            sx={{
              gap: '12px',
            }}
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <TextField
              required
              label={t('login.username', 'Username')}
              fullWidth
              variant="outlined"
              size="medium"
              error={!!errors.username}
              helperText={t(errors.username?.message || '')}
              {...register('username')}
            />

            <TextField
              required
              label={t('login.password', 'Password')}
              type="password"
              fullWidth
              variant="outlined"
              error={!!errors.password}
              helperText={t(errors.password?.message || '')}
              {...register('password')}
            />

            <Button variant="contained" size="large" type="submit">
              {t('login.login', 'Login')}
            </Button>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose()}>{t('login.close', 'Close')}</Button>
      </DialogActions>
    </Dialog>
  );
}
