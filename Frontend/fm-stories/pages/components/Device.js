import React, { useEffect, useState } from 'react';
import { isMobile, isTablet } from 'react-device-detect';

function DetectDevice() {
  const [deviceType, setDeviceType] = useState('Desconocido');
  const [osName, setOsName] = useState('Desconocido');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Solo ejecuta esta lógica en el lado del cliente
      if (isMobile) {
        setDeviceType('Móvil');
      } else if (isTablet) {
        setDeviceType('Tableta');
      } else {
        setDeviceType('Escritorio');
      }

      // Obtener información del sistema operativo desde navigator.userAgent
      const userAgent = navigator.userAgent;
      
      if (userAgent.includes('Windows')) {
        setOsName('Windows');
      } else if (userAgent.includes('Mac')) {
        setOsName('Mac OS');
      } else if (userAgent.includes('Linux')) {
        setOsName('Linux');
      } else if (userAgent.includes('Android')) {
        setOsName('Android');
      } else if (userAgent.includes('iOS')) {
        setOsName('iOS');
      } else {
        setOsName('Desconocido');
      }
    }
  }, []);

  return (
    <div>
      <p>Estás conectado desde un dispositivo: {deviceType}</p>
      <p>Sistema operativo: {osName}</p>
    </div>
  );
}

export default DetectDevice;
