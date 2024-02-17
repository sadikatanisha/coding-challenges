function wave(str) {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      // Skip spaces
      let waveStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
      res.push(waveStr);
    }
  }
  return res;
}
let result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
console.log(wave("hello"), result, "Should return: '" + result + "'");

// result = [
//   "Codewars",
//   "cOdewars",
//   "coDewars",
//   "codEwars",
//   "codeWars",
//   "codewArs",
//   "codewaRs",
//   "codewarS",
// ];
// console.log(wave("codewars"), result, "Should return: '" + result + "'");

// result = [];
// console.log(wave(""), result, "Should return: '" + result + "'");

// result = [
//   "Two words",
//   "tWo words",
//   "twO words",
//   "two Words",
//   "two wOrds",
//   "two woRds",
//   "two worDs",
//   "two wordS",
// ];
// console.log(wave("two words"), result, "Should return: '" + result + "'");
