// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  let sum = [...arguments].map((el) => el * el).reduce((a, b) => a + b, 0);
  return Math.floor(Math.sqrt(sum) / 2);
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45), 86);
