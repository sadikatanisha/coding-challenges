// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function(size) {
    let result = []
    for(let i = 1;i<= size;i++){
      let arr = []
      for(let  j=1;j<= size;j++){
        
        arr.push(i*j)
      }
      result.push(arr)
    }
    return result
  }


  multiplicationTable = function(size) {
    var result = [];
  
    for (var i = 0; i < size; i++) {
      result[i] = [];
      for(var j = 0; j < size; j++) {
        result[i][j] = (i + 1) * (j + 1);
      }
    }
    
    return result
  }