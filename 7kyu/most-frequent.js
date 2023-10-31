function mostFrequentItemCount(collection) {
  let col = {};
  let maxCount = 0;
  for (let i = 0; i < collection.length; i++) {
    if (col[collection[i]]) {
      col[collection[i]]++;
    } else {
      col[collection[i]] = 1;
    }
    if (col[collection[i]] > maxCount) {
      maxCount = col[collection[i]];
    }
  }
  return maxCount;
}

console.log(mostFrequentItemCount([3, -1, -1]), 2);
console.log(
  mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]),
  5
);
