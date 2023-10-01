import React from 'react';
import { isMobile, isTablet, isDesktop } from 'react-device-detect';
import { useRouter } from 'next/router'; // Importa el useRouter
import styles from '../styles/Login.module.css';

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
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter(); // Obtiene el objeto router

  const handleLogin = (e) => {
    e.preventDefault();

    // Verifica las credenciales del usuario
    const foundUser = users.find((userObj) => userObj.user === username && userObj.contraseña === password);

    if (foundUser) {
      // Luego, puedes mostrar el dispositivo desde el que se está conectando
      let deviceType = 'Dispositivo desconocido';
      if (isMobile) {
        deviceType = 'Móvil';
      } else if (isTablet) {
        deviceType = 'Tableta';
      } else if (isDesktop) {
        deviceType = 'Escritorio';
      }

      alert(`Inicio de sesión exitoso desde un ${deviceType}`);

      // Redirige al usuario a la página "/Menu" después de iniciar sesión
      router.push('/Menu');
    } else {
      // Credenciales incorrectas, muestra un alert
      alert('Credenciales incorrectas. No estás autorizado para entrar.');
    }
  };

  return (
    <div className={styles.MainLogin}>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Iniciar Sesión</button>
        </div>
        <p>Usted se está conectando desde un dispositivo Android</p>
      </form>
    </div>
  );
};

export default LoginPage;
