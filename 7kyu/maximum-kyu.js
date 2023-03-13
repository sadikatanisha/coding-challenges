// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.



function adjacentElementsProduct(array) {
    // max product
    let result = array[0]*array[1];
    for(let i=0;i<array.length;i++){
      
      if(array[i] * array[i+1] > result){
        result = array[i] * array[i+1]
      }
    }
    return result
  }


  //
  function adjacentElementsProduct(a) {
    return Math.max(...a.map((x,i)=>x*a[i+1]).slice(0,-1))
  }