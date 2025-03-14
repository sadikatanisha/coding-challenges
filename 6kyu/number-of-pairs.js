function numberOfPairs(gloves) {
  let colorCount = {};
  for (let color of gloves) {
    if (!colorCount[color]) {
      colorCount[color] = 0;
    }
    colorCount[color]++;
  }
  let totalPairs = 0;
  for (let count of Object.values(colorCount)) {
    let pairs = Math.floor(count / 2);
    totalPairs += pairs;
  }
  return totalPairs;
}

console.log(numberOfPairs(["red", "green", "red", "blue", "blue"])); // Output: 2
console.log(numberOfPairs(["red", "red", "red", "red", "red", "red"])); // Output: 3
