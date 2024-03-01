//your task here is pretty simple: given an array of values and an amount of beggars, you are supposed to return an array with the sum of what each beggar brings home, assuming they all take regular turns, from the first to the last.

//Parameter: array of values and int
//Return: array
//Example: ([1,2,3,4,5],2 ) --> [9,6], as the first one takes [1,3,5], the second collects [2,4].
//Psuedocode:
//store n ammount of values
// loop through the array and take turns to add on to the values

function beggars(values, n) {
  let res = [];
  while (n > 0) {
    let val = 0;
    for (let i = 0; i < values.length; i++) {}
  }
}

console.log(beggars([1, 2, 3, 4, 5], 1), [15]);
console.log(beggars([1, 2, 3, 4, 5], 2), [9, 6]);
console.log(beggars([1, 2, 3, 4, 5], 3), [5, 7, 3]);
console.log(beggars([1, 2, 3, 4, 5], 6), [1, 2, 3, 4, 5, 0]);
console.log(beggars([1, 2, 3, 4, 5], 0), []);
