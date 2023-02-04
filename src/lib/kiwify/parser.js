import { randomChartColor } from '@/lib/chart/color';

function parseSalesToChart(arr, arrDates) {
  const salesMap = new Map();

  arrDates.forEach((date) => {
    arr.forEach((item) => {
      if (date === item.date.split('T')[0]) {
        salesMap.set(item.product_name, {
          date: date,
          sales: item.sales_number,
        });
      }
    });
  });
  let chartData = organizeDateToChart(salesMap, arrDates);
  return { chartData, arrDates };
}

// datasets: [
//   {
//     label: 'Protocolo Zero Barriga',
//     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//     borderColor: 'rgb(255, 99, 132)',
//     backgroundColor: 'rgba(255, 99, 132, 0.5)',
//   },
//   {
//     label: 'Como Apagar Estrias Naturalmente',
//     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//     borderColor: 'rgb(53, 162, 235)',
//     backgroundColor: 'rgba(53, 162, 235, 0.5)',
//   },
// ],
function organizeDateToChart(salesMap, arrDates) {
  let datasets = [];
  let salesMapKeys = Array.from(salesMap.keys());
  salesMapKeys.forEach((key) => {
    let color = randomChartColor();
    datasets.push({
      label: key,
      data: arrDates.map((date) => {
        if (salesMap.get(key).date === date) {
          return salesMap.get(key).sales;
        } else {
          return 0;
        }
      }),
      borderColor: color.rgb,
      backgroundColor: color.rgba,
    });
  });
  return datasets;
}

export { parseSalesToChart };
