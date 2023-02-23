import { randomChartColor } from '@/lib/chart/color';

function parseSalesToChart(arr, arrDates) {
  const salesMap = new Map();

  arrDates.forEach((date) => {
    arr.forEach((item) => {
      if (date === item.date.split('T')[0]) {
        let sales = salesMap.get(item.product_name) || [];
        sales.push({
          name: item.product_name,
          date,
          sales: item.sales_number,
        });
        salesMap.set(item.product_name, sales);
      }
    });
  });
  return {
    chartData: organizeDateToChart(salesMap, arrDates),
    arrDates,
  };
}

function organizeDateToChart(salesMap, arrDates) {
  return Array.from(salesMap.keys()).map((key) => {
    const color = randomChartColor();
    const sales = salesMap.get(key);
    const saleData = arrDates.map(
      (date) => sales.find((item) => item.date === date)?.sales || 0
    );

    return {
      label: key,
      data: saleData,
      borderColor: color.rgb,
      backgroundColor: color.rgba,
    };
  });
}

export { parseSalesToChart };
