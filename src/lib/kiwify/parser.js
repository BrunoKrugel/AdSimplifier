import { randomChartColor } from '@/lib/chart/color';

function parseSales(arr, arrDates) {
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
    chartData: organizeDate(salesMap, arrDates),
    arrDates,
  };
}

function organizePayment(arr) {
  const paymentLabels = {
    credit_card: 'Cartão de Crédito',
    pix: 'Pix',
  };

  const paymentData = arr.map((item) => ({
    label: paymentLabels[item._id] || item._id,
    count: item.count,
  }));

  return {
    labels: paymentData.map((obj) => obj.label),
    data: paymentData.map((obj) => obj.count),
  };
}

function organizeDate(salesMap, arrDates) {
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

export { parseSales, organizePayment };
