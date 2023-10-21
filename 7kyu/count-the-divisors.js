// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i == 0) {
      count++;
    }
  }
  return count;
}
console.log(getDivisorsCnt(1), 1);
console.log(getDivisorsCnt(10), 4);
console.log(getDivisorsCnt(11), 2);
console.log(getDivisorsCnt(54), 8);

function getDivisorsCnt(n) {
  var num = 0;
  if (n == 1) return 1;
  if (n % Math.sqrt(n) == 0) num++;
  for (var i = 1; i < Math.sqrt(n); i++) {
    if (n % i == 0) {
      num += 2;
    }
  }
  return num;
}
