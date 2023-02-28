import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const ChartDoughnut = (props) => {
  const { labels, data } = props;
  const backgroundColors = [
    'rgba(75, 192, 192, 1)',
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(153, 102, 255, 1)',
  ];
  const borderColor = backgroundColors;

  const dataset = {
    labels,
    datasets: [
      {
        label: 'Total de vendas',
        data,
        backgroundColor: backgroundColors,
        borderColor,
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={dataset} />;
};

export default ChartDoughnut;
