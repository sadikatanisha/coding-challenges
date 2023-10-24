function repeats(arr) {
  //..
  //index of == last idex of ? return
  let sum = 0;
  arr.forEach((el) =>
    arr.indexOf(el) == arr.lastIndexOf(el) ? (sum += el) : (sum += 0)
  );
  return sum;
}
function repeats(arr) {
  return arr
    .filter((v) => arr.indexOf(v) === arr.lastIndexOf(v))
    .reduce((a, b) => a + b, 0);
}

console.log(repeats([4, 5, 7, 5, 4, 8]), 15);
console.log(repeats([9, 10, 19, 13, 19, 13]), 19);
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12);
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]), 22);
console.log(repeats([5, 10, 19, 13, 10, 13]), 24);
