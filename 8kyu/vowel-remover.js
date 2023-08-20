// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

//PREP:
//Parameters: String
//Result: String
//Example: "hello"     -->  "hll"
//Psuedocode: loop through the string and filter out the vowels
//includes

function shortcut (string) {
    let vowels = ['a','e','i', 'o', 'u']
    return string.split("").filter(el=> !vowels.includes(el)).join("")
}


function shortcut(str) {
    return str.split('').filter(function(e) {
      return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
    }).join('')
  }