// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
  
    return x.map(i=>Number(i)).reduce((acc,c)=>acc+c,0)
  
  }