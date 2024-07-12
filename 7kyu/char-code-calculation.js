// Parameter: string
// Return: int
// Example:'jfmgklf8hglbe'--> 6
// Psuedocode:
// 1. turn the string into an array and get each of their ascii values in an array
// 2.

function calc(x) {
  let sum = (n) => [...n].reduce((a, b) => +a + +b);
  let total1 = x.replace(/./g, (x) => x.charCodeAt(0));
  let total2 = total1.replace(/7/g, "1");
  return sum(total1) - sum(total2);
}
console.log(calc("abcdef"), 6);
console.log(calc("abc"), 6);
// console.log(calc("ifkhchlhfd"), 6);
// console.log(calc("aaaaaddddr"), 30);
// console.log(calc("jfmgklf8hglbe"), 6);
// console.log(calc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 96);
