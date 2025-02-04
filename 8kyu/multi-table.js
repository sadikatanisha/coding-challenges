function multiTable(number) {
  let str = "";
  for (let i = 1; i <= 10; i++) {
    str += `${i} * ${number} = ${i * number}`;
    if (i !== 10) str += "\n";
  }
  return str;
}

console.log(
  multiTable(5),
  "1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50"
);
