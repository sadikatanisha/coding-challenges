// DESCRIPTION:
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'


//Parameter: string of words
//Result: string 
//Example: 
// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'
//Psuedo Code: trun the input string to array and filter the strings
function removeDuplicateWords(s) {
    let arr = s.split(" ");
    let res = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (!res.includes(arr[i])) {
        res.push(arr[i]);
      }
    }
  
    return res.join(" ");
  }


  const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')

  function removeDuplicateWords (s) {
    let unique = new Set(s.split(' '));
    return [...unique].join(' ');
  }