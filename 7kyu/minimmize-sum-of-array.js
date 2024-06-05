// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

//Parameter: Array
//Return: Interger
//Example: minSum({5,4,2,3}) ==> return (22)  ||  5*2 + 3*4 = 22
//Psuedocode:
//* we can sort the array then loop though the array and create a product of i and length-i

function minSum(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < sorted.length / 2; i++) {
    let product = sorted[i] * sorted[sorted.length - i - 1];
    sum += product;
  }
  return sum;
}
console.log(minSum([5, 4, 2, 3]), 22);
console.log(minSum([12, 6, 10, 26, 3, 24]), 342);
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]), 74);

//Time Complexity:
//O(N)
