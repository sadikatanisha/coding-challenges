// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

function isVow(a){
    for(let i=0;i<a.length;i++){
      let char = String.fromCharCode(a[i])
      if('aeiou'.includes(char) ===true){
        a[i] = char;
      }
      
    }
    return a;
  
  }

//const isVow = a => a.map(x=>'aeiou'.includes(y=String.fromCharCode(x)) ? y : x)