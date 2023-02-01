


function mergeArrays(arr1, arr2) {
    let newArr = [...arr1,...arr2]
    
    return [...new Set(newArr.sort((a,b)=>a-b))]
    
  }