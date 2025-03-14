// array: [1, 2, 5, 7, 4, 6, 3, 9, 8]
// start: 2
// length: not specified
// expected result: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// array: [9, 7, 4, 2, 5, 3, 1, 8, 6]
// start: 2
// length: 5
// expected result: [9, 7, 1, 2, 3, 4, 5, 8, 6]

function sectSort(params) {
  // Destructure parameters for clarity:
  let [array, start, len] = params;

  // If length is not provided, sort until the end:
  if (len === undefined) {
    len = array.length - start;
  }

  // Extract the segment to sort:
  let segment = array.splice(start, len);

  // Sort the extracted segment:
  segment.sort((a, b) => a - b);

  // Reinsert the sorted segment back into the array:
  array.splice(start, 0, ...segment);

  return array;
}

console.log(
  sectSort([[1, 2, 5, 7, 4, 6, 3, 9, 8], 2], [1, 2, 3, 4, 5, 6, 7, 8, 9])
);
console.log(
  sectSort([[9, 7, 4, 2, 5, 3, 1, 8, 6], 2, 5], [9, 7, 1, 2, 3, 4, 5, 8, 6])
);
