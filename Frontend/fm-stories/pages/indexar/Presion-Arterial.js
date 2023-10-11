import React, { useState } from 'react';
import { Container, Paper, Grid, TextField, Button } from '@mui/material';

const PresionArterial = () => {
  const [sistolica, setSistolica] = useState('');
  const [diastolica, setDiastolica] = useState('');
  const [hora, setHora] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Crear un objeto con la información
    const presionArterial = {
      sistolica,
      diastolica,
      hora,
      fecha,
    };

    // Almacenar en localStorage
    localStorage.setItem('presionArterial', JSON.stringify(presionArterial));

    // También puedes enviar la información al backend si es necesario

    // Limpiar los campos después de enviar
    setSistolica('');
    setDiastolica('');
    setHora('');
    setFecha('');
  };

  return (
    <Container maxWidth="md">
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
            <h3>Pon tu última Presión (tensión) Arterial</h3>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Presión Arterial Sistólica"
                variant="outlined"
                type="number"
                required
                style={{ width: '100%', marginBottom: '10px' }}
                value={sistolica}
                onChange={(e) => setSistolica(e.target.value)}
              />
              <TextField
                label="Presión Arterial Diastólica"
                variant="outlined"
                type="number"
                required
                style={{ width: '100%', marginBottom: '10px' }}
                value={diastolica}
                onChange={(e) => setDiastolica(e.target.value)}
              />
              <div style={{ display: 'flex' }}>
                <TextField
                  label="Hora"
                  variant="outlined"
                  type="time"
                  required
                  style={{ width: '45%', marginRight: '10px' }}
                  value={hora}
                  onChange={(e) => setHora(e.target.value)}
                />
                <TextField
                  label="Fecha"
                  variant="outlined"
                  type="date"
                  required
                  style={{ width: '45%' }}
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                />
              </div>
              <br />
              <Button type="submit" variant="contained" color="primary">
                Enviar
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PresionArterial;

