function randomChartColor() {
  let color = Math.round,
    s = 200;
  let r = color(Math.random() * s);
  let g = color(Math.random() * s);
  let b = color(Math.random() * s);
  return {
    rgb: 'rgb(' + r + ',' + g + ',' + b + ')',
    rgba:
      'rgba(' + r + ',' + g + ',' + b + ', 0.5)',
  };
}

export { randomChartColor };
