//A non-empty array a of length n is called an array of all possibilities if it contains all numbers between 0 and a.length - 1 (both inclusive).

// [1,2,0,3] => True
// # Includes all numbers between 0 and a.length - 1 (4 - 1 = 3)

// [0,1,2,2,3] => False
// # Doesn't include all numbers between 0 and a.length - 1 (5 - 1 = 4)

// [0] => True
// # Includes all numbers between 0 and a.length - 1 (1 - 1 = 0).

// Parameter: array
// Return: Boolean
// Example: [0,1,2,3,2] => false
// Psuedocode:
// *caluculate the length-1
// *loop through the array and check if the number includes in the array

function isAllPossibilities(x) {
  for (let i = 0; i <= x.length - 1; i++) {
    if (!x.includes(i)) {
      return false;
    }
  }
  return true;
}

console.log(isAllPossibilities([0, 1, 2, 3], true));
console.log(isAllPossibilities([1, 2, 3, 4], false));
