function randomChartColor() {
  const color = Math.round;
  const s = 200;

  const [r, g, b] = [
    color(Math.random() * s),
    color(Math.random() * s),
    color(Math.random() * s),
  ];

  return {
    rgb: `rgb(${r},${g},${b})`,
    rgba: `rgba(${r},${g},${b}, 0.5)`,
  };
}

export { randomChartColor };
