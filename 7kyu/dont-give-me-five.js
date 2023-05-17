
// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12


function dontGiveMeFive(start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
      if (i.toString().indexOf('5') === -1) {
        count++;
      }
    }
    return count;
  }