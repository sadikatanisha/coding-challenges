// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

//my solution

function twoSum(numbers, target) {
    // input is always valid number
    let sum = 0
    
  
    for(let i=0;i<numbers.length;i++){
    //for loop for the first index
      
      for(let j = 0;j<numbers.length;j++){
        //for the second index
        sum = numbers[i] + numbers[j+1]
          if(sum === target){
             return [ i,j+1]
          }
        
      }
    } 
  }


  //clever solution
  function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}