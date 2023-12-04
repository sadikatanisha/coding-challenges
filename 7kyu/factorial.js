//Parameter: integer
//Return: integer
//Example:5! = 5 * 4 * 3 * 2 * 1 = 120
//Psuedocode: if n is 0 > return 1 | initialize a num and them loop through the num and keep multiplying the intial value

function factorial(n) {
  if (n > 12 || n < 0) {
    throw new RangeError("Input must be between 0 and 12");
  }
  let fact = [];
  for (let i = n; i >= 1; i--) {
    fact.push(i);
  }
  return fact.sort().reduce((a, b) => a * b, 1);
}

console.log(factorial(0), 1, "factorial for 0 is 1");
console.log(factorial(1), 1, "factorial for 1 is 1");
console.log(factorial(2), 2, "factorial for 2 is 2");
console.log(factorial(3), 6, "factorial for 3 is 6");
console.log(factorial(5), 120, "factorial for 3 is 6");
console.log(factorial(13), 120, "factorial for 3 is 6");

function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError();
  return n <= 1 ? 1 : n * factorial(n - 1);
}
