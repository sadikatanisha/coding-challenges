var countBits = function(n) {
    //binary representation of n
    //return num of 1's in the binary
    //we need remainders
    return n.toString(2).split("").filter(el=>el==1).length
  
  }

  var countBits = function(n) {
    var count = 0;
    while(n > 0){
      if(n%2 === 1) {
        count++;
      }
      n = Math.floor(n/2);
    }
    return count;
  };