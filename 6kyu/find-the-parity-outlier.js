// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

//my solution
function findOutlier(integers){
    //your code here
    //
    let even = integers.filter(el=>el%2==0)
    let odd = integers.filter(el=>el%2!=0)
    if(even.length == 1){
      return even[0]
    }else{
      return odd[0]
    }
    
  }

  //other's solution

  function findOutlier(int){
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
  }