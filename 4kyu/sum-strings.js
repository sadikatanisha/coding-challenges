function sumStrings(a, b) {
  let num1 = BigInt(a);
  let num2 = BigInt(b);
  let sum = num1 + num2;
  return sum.toString();
}

console.log(
  sumStrings("712569312664357328695151392", "8100824045303269669937"),
  "712577413488402631964821329"
);
