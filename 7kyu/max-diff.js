function maxDiff(lst) {
  if (lst.length <= 1) {
    return 0;
  }

  let max = Math.max(...lst);
  let min = Math.min(...lst);

  return max - min;
}
