import React from 'react';
import { Container, Typography } from '@mui/material';
import { BarChart, PieChart } from '@mui/x-charts';

const EstadoProductosReceta: React.FC = () => {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Estado de Productos por Receta
      </Typography>
      
      {/* Gráfico de pastel para proporción de alimentos en la dieta */}
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 50, label: 'Pescado' },
              { id: 1, value: 20, label: 'Yuca' },
              { id: 2, value: 30, label: 'Maíz' },
            ],
          },
        ]}
        width={400}
        height={200}
      />

      {/* Gráfico de barras para proporción de productos usados en una receta */}
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['Receta 1', 'Receta 2', 'Receta 3'] }]}
        series={[{ data: [40, 30, 20] }]}
        width={500}
        height={300}
      />
    </Container>
  );
};

export default EstadoProductosReceta;
