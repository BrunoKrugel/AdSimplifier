import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';

import { Line, Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = (props) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Ofertas',
      },
    },
  };
  let labels = [];
  let dataset = [];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];
  if (props.labels != null) {
    labels = props.labels;
  } else {
    labels = months;
  }

  if (props.dataset == null) {
    dataset = [
      {
        label: 'Campanha 1',
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Campanha 2',
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ];
  }
    else { 
      dataset = props.dataset;
  }

  const data = {
    labels,
    datasets: dataset,
  };

  return (
    //type 10 = line, 20 = bar
    props.type == 20 ? <Bar data={data} options={options} /> :
    <Line data={data} options={options} />
  );
};

export default Chart;
