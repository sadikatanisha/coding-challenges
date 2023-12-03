//Parameter: String of Numbers, Integer
//Results: String
//Example: revrot("123456987653", 6) --> "234561356789"
//Psuedocode:
//TODO: 1. we need to first check if the is greater than sz
//TODO: 2. if yes ? cut the chunks into the sz else ignore and return empty string
//TODO: 3. if the sum of the cubes of the chunks ( "123" --> 1**3 + 2**3 + 3**3 --> 26 %2 ==0 ) is divisible by 2 ? reverse that chunk
//TODO: 4. else rotate it to the left by one pos "123456" gives "234561"

//! what if the sz is 0 or neg --> return ""
function revrot(str, sz) {
  if (sz <= 0 || !str || sz > str.length) return "";

  const sumCubes = (chunk) =>
    chunk.split("").reduce((sum, digit) => (sum += digit ** 3), 0);
  const reverse = (chunk) => chunk.split("").reverse().join("");
  const rotate = (chunk) => chunk.slice(1) + chunk.slice(0, 1);

  const chunks = [];

  for (let i = 0; i < str.length; i += sz) {
    let chunk = str.slice(i, i + sz);

    if (chunk.length < sz) continue;

    chunk = sumCubes(chunk) % 2 ? rotate(chunk) : reverse(chunk);

    chunks.push(chunk);
  }
  return chunks.join("");
}

// console.log(revrot("123456987654", 6), "234561876549")
// console.log(revrot("123456987653", 6), "234561356789")
// console.log(revrot("66443875", 4), "44668753")
// console.log(revrot("66443875", 8), "64438756")
// console.log(revrot("664438769", 8), "67834466")
// console.log(revrot("123456779", 8), "23456771")
console.log(revrot("", 8), "");
console.log(revrot("123456779", 0), "");
console.log(revrot("563000655734469485", 4), "0365065073456944");
