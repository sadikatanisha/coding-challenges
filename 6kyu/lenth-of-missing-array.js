// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!

//Parameter: array of arrays
//Return: int
//Example: [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3
//Psuedocode:
//* first loop over the array and map it to the length of each el array
//* sort it
//* check the mapped array and check each el and comapre it
//* if there a missing return it

function getLengthOfMissingArray(arrayOfArrays) {
  let arrayOfLengths = (arrayOfArrays || [])
    .map((el) => (el ? el.length : 0))
    .sort();
  if (arrayOfLengths.includes(0)) {
    return 0;
  }
  for (let i = 0; i < arrayOfLengths.length; i++) {
    if (arrayOfLengths[i] + 1 !== arrayOfLengths[i + 1]) {
      return arrayOfLengths[i] + 1;
    }
  }
}

console.log(
  getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]),
  3
);
console.log(
  getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]),
  2
);
console.log(getLengthOfMissingArray([[null], [null, null, null]]), 2);
console.log(
  getLengthOfMissingArray([
    ["a", "a", "a"],
    ["a", "a"],
    ["a", "a", "a", "a"],
    ["a"],
    ["a", "a", "a", "a", "a", "a"],
  ]),
  5
);

console.log(getLengthOfMissingArray([]), 0);
