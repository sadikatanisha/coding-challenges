/***
 * @param Array
 * @return Array
 * @Example [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]
 ***/

function mergeArrays(a, b) {
  let arr = [];
  let maxLength = Math.max(a.length, b.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < a.length) {
      arr.push(a[i]);
    }
    if (i < b.length) {
      arr.push(b[i]);
    }
  }
  return arr;
}

console.log(mergeArrays([1, 2, 3, 4, 5], ["a", "b"]));
