function comp(array1, array2){
    //return true or false 
//checks whether the two arrays have the "same" elements, with the same multiplicities 
    //loop through the first array and check if the multiplicities of that el is available 
   if (!array1 || !array2 || array1.length !== array2.length) {
      return false;
    }
    
    let sorted1 = array1.sort((a,b)=>a-b)
    let sorted2 = array2.sort((a,b)=>a-b)
  
    for (let i = 0; i < sorted1.length; i++) {
      if (sorted1[i] * sorted1[i] !== sorted2[i]) {
        return false;
      }
    }
  
    return true
    
  }


  function comp(array1, array2) {
    if(array1 == null || array2 == null) return false;
    array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
    return array1.map(v => v * v).every((v, i) => v == array2[i]);
  }