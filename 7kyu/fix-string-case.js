// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
//P: string
//R: string
//E: ("code" )--> "code";
//P: count the number of uppercase string and lowercase string --> if upperCase > lowerCase convert the string to uppercase else lowercase
//for equal number change it to lowercase

function solve(s) {
  // count uppercase and lowercase num
  let uppercase = 0;
  let lowercase = 0;
  let arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toUpperCase() == arr[i]) {
      uppercase++;
    } else {
      lowercase++;
    }
  }
  if (uppercase > lowercase) {
    return s.toUpperCase();
  } else {
    return s.toLowerCase();
  }
}

console.log(solve("code"), "code");
console.log(solve("CODe"), "CODE");
console.log(solve("COde"), "code");
console.log(solve("Code"), "code");
