// Parameter: Array of strings
// Return: Array of strings
// Example: ["apple","rottenBanana","apple"] --> ["apple","banana","apple"]
// Psuedocode:

function removeRotten(bagOfFruits) {
  //
  if (bagOfFruits.length == 0) return;
  return bagOfFruits.map((el, arr) =>
    el.startsWith("r") ? el.slice(6).toLowerCase() : el
  );
}

console.log(removeRotten(["apple", "banana", "kiwi", "melone", "orange"]), [
  "apple",
  "banana",
  "kiwi",
  "melone",
  "orange",
]);
console.log(removeRotten([]), []);
console.log(removeRotten(["apple", "rottenBanana", "apple"]), [
  "apple",
  "banana",
  "apple",
]);
