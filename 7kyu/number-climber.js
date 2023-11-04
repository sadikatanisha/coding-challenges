//For every positive integer N, there exists a unique sequence starting with 1 and ending with N and such that every number in the sequence is either the double of the preceeding number or the double plus 1.

// For example, given N = 13, the sequence is [1, 3, 6, 13], because . . . :
//  1 = 1 *1
//  3 =  2*1 +1
//  6 =  2*3
//  13 = 2*6 +1

function climb(n) {
  let res = [n];

  while (n > 1) {
    n = Math.floor(n / 2);
    res.push(n);
  }

  return res.reverse();
}

console.log(climb(1), [1]);
console.log(climb(10), [1, 2, 5, 10]);
console.log(climb(13), [1, 3, 6, 13]);

function climb(n) {
  var results = [];

  if (n === 1) {
    results.push(n);
  } else {
    return climb(Math.floor(n / 2)).concat(n);
  }

  return results;
}
