//Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

function maxGap(numbers) {
  //your code here
  let gap = [];
  let sorted = numbers.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length - 1; i++) {
    let difference = sorted[i + 1] - sorted[i];
    gap.push(difference);
  }
  return Math.max(...gap);
}

console.log(maxGap([13, 10, 2, 9, 5]), 4);
console.log(maxGap([13, 3, 5]), 8);
console.log(maxGap([24, 299, 131, 14, 26, 25]), 168);
console.log(maxGap([-3, -27, -4, -2]), 23);
console.log(maxGap([-7, -42, -809, -14, -12]), 767);
console.log(maxGap([12, -5, -7, 0, 290]), 278);
console.log(maxGap([-54, 37, 0, 64, -15, 640, 0]), 576);
console.log(maxGap([130, 30, 50]), 80);
console.log(maxGap([1, 1, 1]), 0);
console.log(maxGap([-1, -1, -1]), 0);

function maxGap(numbers) {
  return numbers
    .sort((a, b) => a - b)
    .reduce((max, n, i) => {
      let gap = numbers[i + 1] - n;
      if (max < gap) {
        max = gap;
      }
      return max;
    }, 0);
}
