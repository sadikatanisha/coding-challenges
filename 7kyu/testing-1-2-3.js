// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]


var number=function(array){
    return array.map((el,i)=> `${i+1}: ${el}`)
  }