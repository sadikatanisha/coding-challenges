//An element is leader if it is greater than The Sum all the elements to its right side.
//Parameter: array of numbers
//Return: array of numbers
//Example: ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}
// 17 is greater than 4,3,5,2
// 5 is greater than 2
// 2 is greater than 0
//PsuedoCode: loop from right to left
//if i == last el ? check if it's less than or equal 0
//
function arrayLeaders(numbers) {
  let res = [];
  let sum = 0;

  // Traverse the array from right to left
  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] > sum) {
      res.push(numbers[i]);
    }
    // Update the sum of elements to the right
    sum += numbers[i];
  }

  // Reverse the result array as we collected leaders from right to left
  return res.reverse();
}
console.log(arrayLeaders([1, 2, 3, 4, 0]), [4]);
console.log(arrayLeaders([16, 17, 4, 3, 5, 2]), [17, 5, 2]);
