// function sumStrings(a, b) {
//   let num1 = BigInt(a);
//   let num2 = BigInt(b);
//   let sum = num1 + num2;
//   return sum.toString();
// }

function sumStrings(a, b) {
  var res = "",
    c = 0;
  a = a.split("");
  b = b.split("");
  while (a.length || b.length || c) {
    console.log("c before each loop", c);
    c += ~~a.pop() + ~~b.pop();
    console.log("c during loop", c);
    res = (c % 10) + res;
    console.log(res, c);

    c = c > 9; //re-assign c if c is greater than 9
    console.log("c end of each loop", c);
  }
  return res.replace(/^0+/, "");
}

// console.log(
//   sumStrings("712569312664357328695151392", "8100824045303269669937"),
//   "712577413488402631964821329"
// );

console.log(sumStrings("1309", "143"));
