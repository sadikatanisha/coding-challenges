// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

// Notes :
// Array/list size is at least 3 .

// Array/list numbers could be a mixture of positives , negatives and zeros .

// Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

function maxTriSum(numbers) {
  const num = [...new Set(numbers)];
  return num
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, c) => a + c, 0);
}
