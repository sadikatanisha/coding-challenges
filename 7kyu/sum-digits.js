function sumDigits(number) {
  let num = Math.abs(number).toString().split("");

  // Check if the input number is not a valid number
  if (isNaN(parseInt(num[0]))) {
    return NaN;
  }

  return num.map((el) => parseInt(el)).reduce((a, b) => a + b, 0);
}

console.log(sumDigits(10), 1);
console.log(sumDigits(99), 18);
console.log(sumDigits(-32), 5);
console.log(sumDigits(58686), 42);
function sumDigits(number) {
  return Math.abs(number)
    .toString()
    .split("")
    .reduce(function (a, b) {
      return +a + +b;
    }, 0);
}
