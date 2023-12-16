function factorial(n) {
  //4*3*2*1
  //your code here

  let sum = 1;
  for (let i = n; i >= 1; i--) {
    sum *= i;
  }
  return sum;
}

console.log(factorial(0), 1);
console.log(factorial(1), 1);
console.log(factorial(4), 24);
console.log(factorial(7), 5040);
console.log(factorial(17), 355687428096000);

const factorial = (n) => (n ? factorial(n - 1) * n : 1);
function factorial(n) {
  let answer = 1;

  while (n > 0) {
    answer *= n;
    n--;
  }

  return answer;
}
