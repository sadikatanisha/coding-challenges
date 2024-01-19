function sortTransform(a) {
  let first = transform(a);
  let second = transform(a.sort((a, b) => a - b));
  let third = transform(a.sort((a, b) => b - a));
  return `${first}-${second}-${third}-${second}`;
}

let transform = (arr) =>
  [...arr.slice(0, 2), ...arr.slice(arr.length - 2)]
    .map((a) => String.fromCharCode(a))
    .join("");

console.log(
  sortTransform([121, 122, 123, 124, 125, 120, 122, 132]),
  "yzz-xy}-}yx-xy}"
);
console.log(
  sortTransform([111, 112, 113, 114, 115, 113, 114, 110]),
  "oprn-nors-sron-nors"
);
console.log(
  sortTransform([51, 62, 73, 84, 95, 100, 99, 126]),
  "3>c~-3>d~-~d>3-3>d~"
);
