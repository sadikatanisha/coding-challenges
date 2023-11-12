function reverseLetter(str) {
  //coding and coding..
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  return str
    .split("")
    .filter((el) => letters.includes(el))
    .reverse()
    .join("");
}
reverseLetter = (s) =>
  s
    .replace(/[^a-z]/gi, "")
    .split("")
    .reverse()
    .join("");
console.log(reverseLetter("krishan"), "nahsirk");

console.log(reverseLetter("ultr53o?n"), "nortlu");

console.log(reverseLetter("ab23c"), "cba");

console.log(reverseLetter("krish21an"), "nahsirk");
