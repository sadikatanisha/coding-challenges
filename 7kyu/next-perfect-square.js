
// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square



function findNextSquare(sq) {
    let square = Math.sqrt(sq)
    return square % 1 == 0 ? (square + 1 ) *  (square + 1 ) : -1
  }


  function findNextSquare(sq) {
    return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
  }