// Parameter: Array
// Return Number
// Example: [23, 3, 19, 21, 16] --> 23-2 --> 20
// Psuedocode:

function betweenExtremes(numbers) {
  let sorted = numbers.sort((a, b) => a - b);
  return Math.abs(sorted[0] - sorted[sorted.length - 1]);
}

console.log(betweenExtremes([21, 34, 54, 43, 26, 12]), 42);
console.log(betweenExtremes([-1, -41, -77, -100]), 99);

// !Time complexity
// * Sort metod is js --> O(nlogn)
// * sorted[0] and sorted[sorted.length - 1] --> O(1)
// O(nlogn)

function betweenExtremes2(numbers) {
  let min = Infinity;
  let max = -Infinity;

  for (const number of numbers) {
    if (number < min) min = number;
    if (number > max) max = number;
  }
  return max - min;
}

console.log(betweenExtremes2([21, 34, 54, 43, 26, 12]), 42);
console.log(betweenExtremes2([-1, -41, -77, -100]), 99);

// !Time complexity
// * for of loop O(n)
// O(n)
