// function insertDash(num) {
//   return num
//     .toString()
//     .split("")
//     .reduce((acc, c, i, arr) => {
//       if (i > 0 && Number(arr[i]) % 2 !== 0 && Number(arr[i - 1]) % 2 !== 0)
//         acc = acc + "-";

//       return acc + c;
//     }, "");
// }
function insertDash(num) {
  //code me
  num = num.toString().split("");

  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 1 && num[i + 1] % 2 == 1) {
      //   console.log(num[i]);
      num[i] = num[i] + "-";
    }
  }

  return num.join("");
}
console.log(insertDash(454793), "4547-9-3");
console.log(insertDash(123456), "123456");
console.log(insertDash(1003567), "1003-567");
