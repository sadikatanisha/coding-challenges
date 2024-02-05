// Given an array/list of integers, find the Nth smallest element in the array.

//Parameter: array and integer for position
//Return: integer
//Example:
// arr=[3,1,2]            n=2    ==> return 2
// arr=[15,20,7,10,4,3]   n=3    ==> return 7
// arr=[2,169,13,-5,0,-1] n=4    ==> return 2
// arr=[2,1,3,3,1,2],     n=3    ==> return 2
//PsuedoCode:
//sort the array
// return the array in from the indecies of the array
function nthSmallest(arr, pos) {
  let sortedArr = arr.sort((a, b) => a - b);

  return sortedArr[pos - 1];
}

console.log(nthSmallest([3, 1, 2], 2), 2);
console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3), 7);
console.log(nthSmallest([-5, -1, -6, -18], 4), -1);
console.log(nthSmallest([-102, -16, -1, -2, -367, -9], 5), -2);
console.log(nthSmallest([2, 169, 13, -5, 0, -1], 4), 2);
console.log(nthSmallest([2, 1, 3, 3, 1, 2], 3), 2);
