//Parameter: title: string, minorWords: string
//Return: string
//Example: titleCase('a clash of KINGS', 'a an the of') -> 'A Clash of Kings'
//Psuedocode:
//1. Split title into array of words and turn it into lowercase
//2. Split minorWords into array of words
//3. loop thorugh the array of words and check for the words that are not minor words and turn the first word into uppercase
// * if the minor word is the first word then it should be uppercase
// * Empty string should return empty string

function titleCase(title, minorWords) {
  if (typeof title === "undefined" || title.length === 0) {
    return title;
  }

  let minorWordsArray = minorWords ? minorWords.toLowerCase().split(" ") : [];
  let titleArray = title.toLowerCase().split(" ");

  let res = [];
  for (let i = 0; i < titleArray.length; i++) {
    if (minorWordsArray.includes(titleArray[i]) && i !== 0) {
      res.push(titleArray[i]);
    } else {
      res.push(titleArray[i].charAt(0).toUpperCase() + titleArray[i].slice(1));
    }
  }
  return res.join(" ");
}
