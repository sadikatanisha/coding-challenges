function minValue(values) {
  return parseInt([...new Set(values)].sort((a, b) => a - b).join(""));
}

console.log(minValue([2, 3, 4, 6, 4, 4]));
