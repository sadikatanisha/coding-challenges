function sorter(arr) {
  return arr.sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1));
}

console.log(sorter(["Algebra", "history", "Geometry", "english"]), [
  "Algebra",
  "english",
  "Geometry",
  "history",
]);
