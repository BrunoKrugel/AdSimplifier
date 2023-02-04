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
