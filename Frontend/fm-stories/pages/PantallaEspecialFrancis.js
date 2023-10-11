import React from 'react';
import { Container, Button, Grid, Typography, Paper } from '@mui/material';
import Link from 'next/link';

const PantallaEspecialFrancis = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: 20, margin: 'auto', width: '85%' }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ minHeight: '60vh' }}>
          <Grid item xs={12} md={6}>
            <Link href="/Indexar">
              <Paper elevation={3} style={{ padding: 20, textAlign: 'center' }}>
                <Typography variant="h6">Indexar Información del Paciente</Typography>
                <Button variant="contained" color="primary">
                  Ir a Indexar
                </Button>
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link href="/Menu">
              <Paper elevation={3} style={{ padding: 20, textAlign: 'center' }}>
                <Typography variant="h6">Ver Información</Typography>
                <Button variant="contained" color="primary">
                  Ir a Ver
                </Button>
              </Paper>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default PantallaEspecialFrancis;
