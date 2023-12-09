//Parameter: string of letters
//Return: array containing the indicies of vowels
//Example: vowelIndices("orange"), [1, 3, 6])
//Psuedocode:
// 1. write a string containing the vowels
// 2. we need to turn the parameter to an array and check each item
// 3. if theres a vowel in the list then we returh the index + 1 of that letter

function vowelIndices(word) {
  let vowel = "aeiouy";
  let arr = [];
  word = word.split("");
  for (let i = 0; i < word.length; i++) {
    if (vowel.includes(word[i].toLowerCase())) {
      arr.push(i + 1);
    }
  }
  return arr;
}

console.log(vowelIndices("mmm"), []);
console.log(vowelIndices("apple"), [1, 5]);
console.log(vowelIndices("super"), [2, 4]);
console.log(vowelIndices("orange"), [1, 3, 6]);
console.log(
  vowelIndices("supercalifragilisticexpialidocious"),
  [2, 4, 7, 9, 12, 14, 16, 19, 21, 24, 25, 27, 29, 31, 32, 33]
);
