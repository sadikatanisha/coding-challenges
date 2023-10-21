//Find the stray number
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// The input array will always be valid! (odd-length >= 3)

//Parameter:array
//Return: number
//Example: [1, 1, 2] ==> 2
//Psuedocode:
//create an object with the unique values
//find the one with odd number

function stray(numbers) {
  let num = {};
  for (let i = 0; i < numbers.length; i++) {
    if (num[numbers[i]]) {
      num[numbers[i]]++;
    } else {
      num[numbers[i]] = 1;
    }
  }
  for (let key in num) {
    if (num[key] % 2 !== 0) {
      return parseInt(key, 10);
    }
  }
}
function stray(numbers) {
  for (var i in numbers) {
    if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
      return numbers[i];
    }
  }
}

console.log(stray([1, 1, 2]), 2);
console.log(stray([1, 2, 1]), 2);
console.log(stray([2, 1, 1]), 2);
