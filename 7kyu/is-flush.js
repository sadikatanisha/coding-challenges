//P: Array of strings
//R: boolean
//E:
//["AS", "3S", "9S", "KS", "4S"]  ==> true
//["AD", "4S", "7H", "KS", "10S"] ==> false
//P:
//loop through the array and take only the index 1 of each string --> maybe use map
// count the leltters if 5 of them are of same suit return true else false

function isFlush(cards) {
  let count = 0;
  let arr = cards.map((el) => el[el.length - 1]);
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      count++;
    }
  }
  return count == 5;
}

console.log(isFlush(["AS", "3S", "9S", "KS", "4S"]), true);
console.log(isFlush(["AD", "4S", "7H", "KC", "5S"]), false);
console.log(isFlush(["AD", "4S", "10H", "KC", "5S"]), false);
console.log(isFlush(["QD", "4D", "10D", "KD", "5D"]), true);
console.log(isFlush(["10D", "4D", "QD", "KD", "5D"]), true);

//check the first card of the array with every other cards
//every returns true is every card is similar in the array
function isFlush(cards) {
  return cards.every((a) => cards[0].slice(-1) === a.slice(-1));
}
