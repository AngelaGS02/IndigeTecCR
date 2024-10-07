import React from 'react';
import { Container, Typography } from '@mui/material';
import { LineChart, BarChart } from '@mui/x-charts';

const ActividadRecetas: React.FC = () => {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Actividad de Recetas
      </Typography>

      {/* Gráfico de líneas para la actividad histórica de recetas */}
      <LineChart
        series={[
          { data: [5, 10, 8, 15, 12, 18] },
        ]}
        height={290}
        xAxis={[{ data: ['2018', '2019', '2020', '2021', '2022', '2023'], scaleType: 'band' }]}
      />

      {/* Gráfico de barras para los productos más populares */}
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['Producto 1', 'Producto 2', 'Producto 3'] }]}
        series={[{ data: [50, 70, 30] }]}
        width={500}
        height={300}
      />
    </Container>
  );
};

export default ActividadRecetas;
