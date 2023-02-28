function buildArrOfSales(arr) {
  const total = arr.reduce((acc, item) => acc + item.count, 0);
  arr.push({ _id: 'all', count: total });
  return arr;
}

function getPercentage(arr, total) {
  return arr.map((item) => {
    const percentage = (item.count / total) * 100;
    return {
      ...item,
      percentage: percentage.toFixed(2),
    };
  });
}

export { buildArrOfSales, getPercentage };
