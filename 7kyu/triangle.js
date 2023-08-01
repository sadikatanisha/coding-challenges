// Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

// 1st (1)   2nd (3)    3rd (6)
// *          **        ***
//            *         **
//                      *


function triangular( n ) {
    if(n>0 && typeof n == 'number' ){
      return n*(n+1)/2
    }else{
      return 0
    }
  }


  function triangular( n ) {
    return n > 0 ? n * (n + 1) / 2 : 0;
  }

