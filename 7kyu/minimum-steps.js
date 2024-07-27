// Sort the array
// Iterate through the sorted array, summing smallest element until the sum becomes greater or equal to the value
// count the steps it took to go there

function minimumSteps(numbers, value) {
  let sorted = numbers.sort((a, b) => a - b);
  let steps = 0;
  let sum = 0;

  for (let i = 0; i < sorted.length; i++) {
    sum += sorted[i];
    if (sum >= value) {
      return steps;
    }
    steps++;
  }

  return steps;
}
console.log(minimumSteps([4, 6, 3], 7), 1);
console.log(minimumSteps([10, 9, 9, 8], 17), 1);
console.log(minimumSteps([8, 9, 10, 4, 2], 23), 3);
console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464), 8);
console.log(minimumSteps([4, 6, 3], 2), 0);
