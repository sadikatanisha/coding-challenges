//Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

//Parameter: string
//Return: string
//Example: "hello" => "h2ll4"
//Psuedocode:
//let's create a string of vowels --> code will be it's index + 1
//loop over the string and map it to the vowels

function encode(string) {
  let vowels = "aeiou";
  return string
    .split("")
    .map((char) => {
      if (vowels.includes(char)) {
        return String(vowels.indexOf(char) + 1);
      } else {
        return char;
      }
    })
    .join("");
}

function decode(string) {
  let vowels = "aeiou";
  return string
    .split("")
    .map((char) => {
      if (!Number.isNaN(Number(char))) {
        return vowels[Number(char) - 1];
      } else {
        return char;
      }
    })
    .join("");
}

console.log(encode("hello"), "h2ll4");
console.log(decode("h2ll4"), "hello");

const table = ["a", "e", "i", "o", "u"];
const encode = (string) =>
  string
    .split("")
    .map((x) => table.indexOf(x) + 1 || x)
    .join("");
const decode = (string) =>
  string
    .split("")
    .map((x) => table[Number(x) - 1] || x)
    .join("");
