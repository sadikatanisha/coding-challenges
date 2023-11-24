// [(1), (2), (3), [[(4)], 5]]

// (1) - Total amount of received integers.

// (2) - Total amount of different values the array has.

// (3) - Total amount of values that occur only once.

// (4) and (5) both in a list

// (4) - It is (or they are) the element(s) that has (or have) the maximum occurrence. If there are more than one, the elements should be sorted (by their value obviously)

// (5) - Maximum occurrence of the integer(s)

function countSel(array) {
  let totalCount = array.length;
  let uniqueCount = [...new Set(array)].length;

  // Count values that occur only once
  let singleOccurrenceCount = array.filter(
    (el) => array.indexOf(el) == array.lastIndexOf(el)
  ).length;

  // Count occurrences of each value
  let occurrences = {};
  for (let i = 0; i < array.length; i++) {
    if (occurrences[array[i]]) {
      occurrences[array[i]]++;
    } else {
      occurrences[array[i]] = 1;
    }
  }
  console.log(occurrences);
  // Find the maximum occurrence and its value(s)
  //{ '3': 1, '4': 1, '5': 1, '-3': 1, '-2': 1, '-1': 2, '-5': 3 }
  let maxOccurrences = 0; //how many times
  let maxValues = []; //the value
  for (let key in occurrences) {
    //if the value is not same as before / greater > reassign the maxvalue
    if (occurrences[key] > maxOccurrences) {
      maxOccurrences = occurrences[key];
      maxValues = [parseInt(key)];
    } else if (occurrences[key] === maxOccurrences) {
      //if it's the same keep pushing it to the array
      maxValues.push(parseInt(key));
    }
  }
  console.log(maxValues);

  // Sort maxValues array
  maxValues.sort((a, b) => a - b);

  return [
    totalCount,
    uniqueCount,
    singleOccurrenceCount,
    [maxValues, maxOccurrences],
  ];
}

console.log(
  countSel([-3, -2, -1, 3, 4, -5, -5, 5, -1, -5], [10, 7, 5, [[-5], 3]])
);
console.log(
  countSel([5, -1, 1, -1, -2, 5, 0, -2, -5, 3], [10, 7, 4, [[-2, -1, 5], 2]])
);
// console.log(
//   countSel([-2, 4, 4, -2, -2, -1, 3, 5, -5, 5], [10, 6, 3, [[-2], 3]])
// );
// console.log(countSel([4, -5, 1, -5, 2, 4, -1, 4, -1, 1], [10, 5, 1, [[4], 3]]));
// console.log(
//   countSel(
//     [4, 4, 2, -3, 1, 4, 3, 2, 0, -5, 2, -2, -2, -5],
//     [14, 8, 4, [[2, 4], 3]]
//   )
// );
