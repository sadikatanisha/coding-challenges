function switcher(x) {
  let alph = "!? abcdefghijklmnopqrstuvwxyz".split("").reverse();
  //   console.log(alph[el]);
  return x.map((el) => alph[el - 1]).join("");
}
console.log(
  switcher(["24", "12", "23", "22", "4", "26", "9", "8"]),
  "codewars"
);

// console.log(
//   switcher([
//     "25",
//     "7",
//     "8",
//     "4",
//     "14",
//     "23",
//     "8",
//     "25",
//     "23",
//     "29",
//     "16",
//     "16",
//     "4",
//   ]),
//   "btswmdsbd kkw"
// );
console.log(switcher(["4", "24"]), "wc");
