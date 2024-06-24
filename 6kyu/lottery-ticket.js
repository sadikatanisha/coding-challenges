// Parameter: Array, Int
// Return: String
// Example: [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ] --> "Loser!"
// Psuedocode:
// * set a variable to keep count of the wins
// * loop through the array then for each element of the array check if the charcode is avaible in the string
// * if found increment the variable
// * lastly compare the totoal win with the argument provided and return 'Winner!' || 'Loser!'.

function bingo(ticket, win) {
  let winCount = 0;
  for (let i = 0; i < ticket.length; i++) {
    let letters = ticket[i][0];
    let code = ticket[i][1];
    for (let j = 0; j < letters.length; j++) {
      if (letters.charCodeAt(j) === code) {
        winCount++;
        break; // Break after the first match in the current string
      }
    }
  }
  return winCount >= win ? "Winner!" : "Loser!";
}

console.log(
  bingo(
    [
      ["ABC", 65],
      ["HGR", 74],
      ["BYHT", 74],
    ],
    2
  ),
  "Loser!"
);
console.log(
  bingo(
    [
      ["ABC", 65],
      ["HGR", 74],
      ["BYHT", 74],
    ],
    1
  ),
  "Winner!"
);
console.log(
  bingo(
    [
      ["HGTYRE", 74],
      ["BE", 66],
      ["JKTY", 74],
    ],
    3
  ),
  "Loser!"
);

console.log(
  bingo(
    [
      ["BBDKZJR", 74],
      ["OJZO", 72],
      ["HY", 70],
      ["ACG", 87],
      ["CU", 90],
      ["XZ", 75],
    ],
    1
  ),
  "Winner!"
);

function bingo(ticket, win) {
  if (
    ticket.filter((a) => a[0].split("").some((b) => b.charCodeAt(0) == a[1]))
      .length >= win
  ) {
    return "Winner!";
  }
  return "Loser!";
}
