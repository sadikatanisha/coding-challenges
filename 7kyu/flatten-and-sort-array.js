function flattenAndSort(array) {
    // Good luck, brave code warrior!
   
    let newArr =[];
    for(let i=0;i<array.length;i++){
      array[i].forEach(el=>newArr.push(el))
    }
    return newArr.sort((a,b)=>a-b)
  
  }




function flattenAndSort(array) {
    return [].concat(...array).sort((a,b) => a - b);
  }