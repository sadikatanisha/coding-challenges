function wordsToMarks(string) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  return string
    .split("")
    .map((el) => alphabets.indexOf(el) + 1)
    .reduce((a, b) => a + b, 0);
}

console.log(wordsToMarks("attitude"), 100);
console.log(wordsToMarks("friends"), 75);
console.log(wordsToMarks("family"), 66);

const wordsToMarks = (s) =>
  [...s].reduce((res, c) => (res += c.charCodeAt() - 96), 0);
