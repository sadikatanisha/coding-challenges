function insertDash(num) {
  return num
    .toString()
    .split("")
    .reduce((acc, c, i, arr) => {
      if (i > 0 && Number(arr[i]) % 2 !== 0 && Number(arr[i - 1]) % 2 !== 0)
        acc = acc + "-";

      return acc + c;
    }, "");
}
console.log(insertDash(454793), "4547-9-3");
console.log(insertDash(123456), "123456");
console.log(insertDash(1003567), "1003-567");
