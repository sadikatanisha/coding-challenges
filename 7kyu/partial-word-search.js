// Parameter: Array, String
// Return: Array
// Example: (["home", "milk", "Mercury", "fish"],"me") --> ["home", "Mercury"]
// * we can use filter

function wordSearch(query, seq) {
  let res = [];
  for (let i = 0; i < seq.length; i++) {
    if (seq[i].toLowerCase().includes(query.toLowerCase())) {
      res.push(seq[i]);
    }
  }
  return res.length > 0 ? res : ["Empty"];
}

console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"]), [
  "ab",
  "abc",
  "zab",
]);
console.log(wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"]), [
  "ab",
  "abc",
  "zab",
]);
console.log(wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"]), [
  "aB",
  "Abc",
  "zAB",
]);
console.log(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"]), ["Empty"]);

function wordSearch(query, seq) {
  const result = seq.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
  return result.length ? result : ["Empty"];
}
