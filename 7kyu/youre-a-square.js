//test cases
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

var isSquare = function(n){
    let sqrt = Math.sqrt(n)
  if(sqrt%1==0){
    return true
  }else{
    return false
  }
}
  


function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
  }