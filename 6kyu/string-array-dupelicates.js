//given an array of strings and my task is to remove all consecutive duplicate letters from each string in the array.

//Parameter: array of strings
//Return: array of strings
//Example:  dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"]) => ["codewars", "picaniny", "hubububo"]
//Psuedocode:
//initialize 1 empty string and empty array
//loop through each elements of the array
// --> loop thorugh the letters of each element
//after each loop we will check if there's consecutive dupes if not assign the empty string with that
//then push it to an array

// function dup(s) {
//   let res = [];
//   for (let i = 0; i < s.length; i++) {
//     let str = "";
//     let el = s[i];
//     for (let j = 0; j < el.length; j++) {
//       if (el[j] !== el[j + 1]) {
//         str += el[j];
//         console.log(str);
//       }
//     }

//     res.push(str);
//     console.log(res);
//   }
// }

function dup(s) {
  return s.map((w) => {
    return w
      .split("")
      .filter((c, i, arr) => {
        return c !== arr[i + 1];
      })
      .join("");
  });
}

console.log(
  dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"]),
  ["codewars", "picaniny", "hubububo"]
);
// console.log(dup(["abracadabra", "allottee", "assessee"]), [
//   "abracadabra",
//   "alote",
//   "asese",
// ]);
// console.log(dup(["kelless", "keenness"]), ["keles", "kenes"]);
// console.log(dup(["Woolloomooloo", "flooddoorroommoonlighters", "chuchchi"]), [
//   "Wolomolo",
//   "flodoromonlighters",
//   "chuchchi",
// ]);
// console.log(dup(["adanac", "soonness", "toolless", "ppellee"]), [
//   "adanac",
//   "sones",
//   "toles",
//   "pele",
// ]);
// console.log(dup(["callalloo", "feelless", "heelless"]), [
//   "calalo",
//   "feles",
//   "heles",
// ]);
// console.log(dup(["putteellinen", "keenness"]), ["putelinen", "kenes"]);
// console.log(dup(["kelless", "voorraaddoosspullen", "achcha"]), [
//   "keles",
//   "voradospulen",
//   "achcha",
// ]);
