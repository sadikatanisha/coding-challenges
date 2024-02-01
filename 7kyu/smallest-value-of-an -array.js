//Parameter: array of integers and string --> value or index
//Return: integer
//Example:
// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0
//Psuedocode:
//sort the array then check the toReturn to return desired value

// function min(arr, toReturn) {
//   let value = arr[0];
//   let index = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       value = arr[i + 1];
//       index = i + 1;
//     }
//   }
//   if (toReturn == "value") {
//     return value;
//   } else if (toReturn == "index") {
//     return index;
//   }
// }
//!Failed 1 test case

// console.log(min([1, 2, 3, 4, 5], "value"), 1);
// console.log(min([1, 2, 3, 4, 5], "index"), 0);

function min(array, outer) {
  return outer === "index"
    ? array.indexOf(Math.min(...array))
    : Math.min(...array);
}

console.log(min([1, 2, 3, 4, 5], "value"), 1);
console.log(min([1, 2, 3, 4, 5], "index"), 0);
