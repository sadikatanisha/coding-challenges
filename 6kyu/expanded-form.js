function expandedForm(num) {
  // Param: int
  // Return string
  // Example: 12 -> "10 + 2"
  // Psuedocode:
  let str = num.toString();
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let digit = str[i];
    if (digit !== "0") {
      arr.push(str[i] + "0".repeat(str.length - i - 1));
      console.log(arr);
    }
  }
  return arr.join(" + ");
}
