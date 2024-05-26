//A Tidy number is a number whose digits are in non-decreasing order.
// Parameter: integer
// Return: boolean
// Example: 2789 ==> tru | 102 ==> false
//Psuedocode: loop through the number and check if i > i+1

function tidyNumber(n) {
  //turn the number into an array of string
  let arr = String(n).split("");
  for (let i = 0; i < arr.length - 1; i++) {
    // loop through the array
    if (Number(arr[i]) > Number(arr[i + 1])) {
      return false;
    }
  }
  return true;
}

function tidyNumber(n) {
  let arr = [...n.toString()].map(Number);
  return arr.every((el, ind, arr) => !ind || el >= arr[ind - 1]); //!ind shortchut of ind === 0
}

console.log(tidyNumber(12), true);
console.log(tidyNumber(102), false);
console.log(tidyNumber(9672), false);
console.log(tidyNumber(2789), true);
console.log(tidyNumber(2335), true);
console.log(tidyNumber(4983), false);
