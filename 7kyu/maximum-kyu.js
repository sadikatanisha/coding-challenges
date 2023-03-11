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