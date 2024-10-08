import React from 'react';
import { Container, Typography } from '@mui/material';
import { BarChart, PieChart } from '@mui/x-charts';

const ResumenGeneral: React.FC = () => {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Resumen General
      </Typography>
      
      {/* Ejemplo de gráfico de barras para "Cantidad de productos registrados por cada lengua" */}
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['Español', 'Bribri', 'Cabécar'] }]}
        series={[{ data: [50, 30, 20] }]}
        width={500}
        height={300}
      />

      {/* Ejemplo de gráfico de pastel para "Listado de productos no disponibles" */}
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: 'Maiz' },
              { id: 1, value: 15, label: 'Cacao' },
              { id: 2, value: 5, label: 'Cafe' },
            ],
          },
        ]}
        width={400}
        height={200}
      />
    </Container>
  );
};

export default ResumenGeneral;
