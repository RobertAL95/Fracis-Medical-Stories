import React from 'react';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';
import { isMobile } from 'react-device-detect';
import { useRouter } from 'next/router';

const IndexarInformacionMedica = () => {
  const categorias = [
    { nombre: 'Presion Arterial', accion: 'Indexar presión arterial' },
    { nombre: 'Control de líquidos', accion: 'Indexar líquidos' },
    { nombre: 'Historial médico', accion: 'Indexar historial médico' },
  ];

  const containerStyle = {
    textAlign: 'center',
    padding: isMobile ? '40px' : '0',
    width: isMobile ? '75%' : '80%',
    margin: '0 auto',
  };

  const router = useRouter();

  const handleCategoryClick = (nombre) => {
    router.push(`/indexar/${nombre.replace(/ /g, '-')}`);
  };

  return (
    <Container maxWidth="md" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={10} style={{ padding: '20px', textAlign: 'center', ...containerStyle }}>
        <Typography variant="h4" style={{ marginBottom: '20px' }}>
          Indexa la Información Médica
        </Typography>
        <Grid container spacing={2}>
          {categorias.map((categoria, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', margin: '20px', cursor: 'pointer' }} onClick={() => handleCategoryClick(categoria.nombre)}>
                <Typography variant="h6">{categoria.nombre}</Typography>
                <Button variant="contained" color="primary" onClick={() => handleCategoryClick(categoria.nombre)}>
                  {categoria.accion}
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default IndexarInformacionMedica;
