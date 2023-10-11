import React, { useState } from 'react';
import { isMobile, isTablet, isDesktop } from 'react-device-detect';
import { useRouter } from 'next/router';
import { TextField, Button, Container, Paper, Typography, Box } from '@mui/material';
import styles from '../styles/Login.module.css';
import DetectDevice from './components/Device';

const users = [
  {
    user: 'Francis',
    contraseña: '313101',
  },
  {
    user: 'Yulvis',
    contraseña: 'carne',
  },
  {
    user: 'Robert',
    contraseña: '050695',
  },
];

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [deviceType, setDeviceType] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    const foundUser = users.find((userObj) => userObj.user === username && userObj.contraseña === password);

    if (foundUser) {
      let device = 'Dispositivo desconocido';
      if (isMobile) {
        device = 'Móvil';
      } else if (isTablet) {
        device = 'Tableta';
      } else if (isDesktop) {
        device = 'Escritorio';
      }

      setDeviceType(device);

      if (foundUser.user === 'Francis') {
        // Redirigir a una página especial para Francis
        router.push('/PantallaEspecialFrancis');
      } else {
        // Redirigir a la página "/Menu" para otros usuarios
        router.push('/Menu');
      }
    } else {
      alert('Credenciales incorrectas. No estás autorizado para entrar.');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={10} className={styles.MainLogin}>
        <Typography variant="h4">Iniciar Sesión</Typography>
        <form onSubmit={handleLogin}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="100%"
            m="auto"
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Contraseña"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">
              Iniciar Sesión
            </Button>
          </Box>
        </form>
      </Paper>
      <DetectDevice deviceType={deviceType} />
    </Container>
  );
};

export default LoginPage;
