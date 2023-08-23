// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0

//PREP
//Parameter: String ->2 
//Return: number
//Example: str_count("Hello", 'o'); // returns 1
//PsuedoCode: loop through the first string  and check how many times "letter" has occured --> we need a counter

function strCount(str, letter){  
    let res = 0;
    let arr = str.split("")
    for(let i=0;i<arr.length;i++){
        if(arr[i]===letter){
            res++
        }
    }
    return res
  }


  function strCount(str, letter){  
    return str.split(letter).length-1
  }

  function strCount(str, letter){  
    return str.split('').filter(c => c == letter).length;
  }
  