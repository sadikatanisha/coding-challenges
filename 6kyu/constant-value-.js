//Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

function solve(s) {
  let vowels = "aeiou";
  let maxSum = 0;
  let currentSum = 0;
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      maxSum = Math.max(maxSum, currentSum);
      currentSum = 0;
    } else {
      currentSum += s.charCodeAt(i) - 96;
    }
    // for last constant substring
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

console.log(solve("zodiac"), 26);
console.log(solve("chruschtschov"), 80);
console.log(solve("khrushchev"), 38);
console.log(solve("strength"), 57);
console.log(solve("catchphrase"), 73);
console.log(solve("twelfthstreet"), 103);
console.log(solve("mischtschenkoana"), 80);
console.log(solve("az"), 26);
