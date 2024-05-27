//Parameter: Array
//Return: Array
//Example: [6, 'c']), [[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']]
//PsuedoCode:
//Case 1: both number --> return both num combined repeated array
//Case 2: one nuber --> return the array that number of times
//Case 3: both letter --> return Void
//Case 4: number in 0 --> return enpty array

function explode(x) {
  let repeat = 0;
  if (typeof x[0] === "number" && typeof x[1] === "number") {
    repeat = x[0] + x[1];
  } else if (typeof x[0] === "number") {
    repeat = x[0];
  } else if (typeof x[1] === "number") {
    repeat = x[1];
  } else {
    return "Void !";
  }
  if (repeat === 0) {
    return [];
  }
  return Array(repeat).fill(x);
}

console.log(explode([9, 3]), [
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
  [9, 3],
]);
console.log(explode(["a", 3]), [
  ["a", 3],
  ["a", 3],
  ["a", 3],
]);
console.log(explode([6, "c"]), [
  [6, "c"],
  [6, "c"],
  [6, "c"],
  [6, "c"],
  [6, "c"],
  [6, "c"],
]);
console.log(explode(["a", "b"]), "Void!");
console.log(explode(["a", 0]), []);
