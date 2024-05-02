//you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.
//Parameter: Array of integers
//Return: Integer
//Example:[1, -1, 2, -2, 3] => 3
//PsuedoCode: loop thorough the array and then find the pain my indexOf lastIndexOf --> if we don't find it then return
//we can use filter
function solve(arr) {
  for (let i = 0; i < arr.length; i++) {
    //**-1 because the value does not exist
    if (arr.indexOf(-arr[i]) === -1) {
      return arr[i];
    }
  }
}
console.log(solve([1, -1, 2, -2, 3]), 3);
console.log(solve([-3, 1, 2, 3, -1, -4, -2]), -4);
console.log(solve([1, -1, 2, -2, 3, 3]), 3);
console.log(solve([-110, 110, -38, -38, -62, 62, -38, -38, -38]), -38);
console.log(solve([-9, -105, -9, -9, -9, -9, 105]), -9);
