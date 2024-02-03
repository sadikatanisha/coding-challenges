const isUpperCase = (str) => {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i].toUpperCase()) {
      return false;
    }
  }
  return true;
};

console.log(isUpperCase("c", false));
console.log(isUpperCase("C", true));
console.log(isUpperCase("hello I AM DONALD", false));
console.log(isUpperCase("HELLO I AM DONALD", true));
