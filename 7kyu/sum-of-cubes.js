function sumCubes(n) {
  let arr = [];
  while (n > 0) {
    arr.push(n * n * n);
    console.log(arr);
    n--;
  }
  return arr.reduce((a, b) => a + b, 0);
}

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
console.log(sumCubes(2), 9);
