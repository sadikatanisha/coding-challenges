function bubblesortOnce(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] > a[i + 1]) {
      let temp = a[i];
      a[i] = a[i + 1];
      a[i + 1] = temp;
    }
  }
  return a;
}

console.log(
  bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]),
  [7, 5, 3, 1, 2, 4, 6, 8, 9]
);
