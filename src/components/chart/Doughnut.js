import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const ChartDoughnut = (props) => {
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

  return <Doughnut data={data} options={options} />;
};

export default ChartDoughnut;
