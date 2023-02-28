import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Chart = (props) => {
  const options = {
    responsive: true,
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Ofertas',
    },
  };

  const { labels = [], dataset = [] } = props;

  const data = {
    labels,
    datasets: dataset,
  };

  return props.type === 10 ? (
    <Line data={data} options={options} />
  ) : (
    <Bar data={data} options={options} />
  );
};

export default Chart;
