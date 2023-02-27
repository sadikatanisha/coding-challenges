// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise


function isSortedAndHow(array) {
    const ascending = [...array].sort((a,b)=>a-b)
    console.log(ascending)
    const descending = [...array].sort((a,b)=>b-a)
    console.log(ascending)
    console.log(descending)
    
    if(String(array)===String(ascending)){
      return "yes, ascending"
    }else if (String(array)===String(descending)){
      return "yes, descending"
    }else{
      return "no"
    }
  }


  function isSortedAndHow(arr) {
    return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
           arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
  }