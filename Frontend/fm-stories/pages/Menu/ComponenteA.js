import React, { useEffect, useState } from 'react';
import styles from '../../styles/Tension.module.css';

const ComponenteA = () => {
  const [presionArterial, setPresionArterial] = useState(null);

  const obtenerPresionArterialAlmacenada = () => {
    const presionArterialStr = localStorage.getItem('presionArterial');
    if (presionArterialStr) {
      const presionArterial = JSON.parse(presionArterialStr);
      setPresionArterial(presionArterial);
    } else {
      console.log('No se encontró presión arterial almacenada en localStorage.');
    }
  };

  useEffect(() => {
    obtenerPresionArterialAlmacenada();
  }, []);

  return (
    <div className={styles.main}>
      <h2>Control de tensión</h2>
      <div className={styles.ct}>
        <h7> Sistólica</h7>
        <h7> Diastólica</h7>
      </div>
      {presionArterial ? (
        <div>
          <div>
            <span>{presionArterial.sistolica} / {presionArterial.diastolica}</span> || {presionArterial.hora} || {presionArterial.fecha}
          </div>
          {/* Puedes mostrar la información en un bucle si hay múltiples entradas en localStorage */}
        </div>
      ) : (
        <p>No se encontró presión arterial almacenada en localStorage.</p>
      )}
    </div>
  );
};

export default ComponenteA;
