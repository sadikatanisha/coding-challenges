// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


var uniqueInOrder=function(iterable){
    
    let result = []
    let arr = [...iterable]
   
    for(let i=0;i<arr.length;i++){
      if(arr[i]!==arr[i+1]){
        result.push(arr[i])
      }
    }
    return result
  }
  

  var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}