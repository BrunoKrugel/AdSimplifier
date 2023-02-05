import { randomChartColor } from '@/lib/chart/color';

function parseSalesToChart(arr, arrDates) {
  const salesMap = new Map();

  arrDates.forEach((date) => {
    arr.forEach((item) => {
      if (date === item.date.split('T')[0]) {
        let sales = salesMap.get(item.product_name);
        if (!sales) {
          sales = [];
        }
        sales.push({
          name: item.product_name,
          date: date,
          sales: item.sales_number,
        });
        salesMap.set(item.product_name, sales);
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
    let saleData = new Array(arrDates.length).fill(0);
    for (let i = 0; i < arrDates.length; i++) {
      salesMap.get(key).forEach((item) => {
        if (item.date === arrDates[i]) {
          saleData[i] = item.sales;
        }
      });
    }
    datasets.push({
      label: key,
      data: saleData,
      borderColor: color.rgb,
      backgroundColor: color.rgba,
    });
  });
  return datasets;
}

export { parseSalesToChart };
