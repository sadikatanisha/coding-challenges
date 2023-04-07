// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd)


function findOdd(A) {
    //count how many times a el has accourd
    //if it's odd number of times then return the el
    //find the unique elements of the array
    // let arrElements = A.filter((el,i,arr)=>arr.indexOf(el)===i);
    //we need to count how many time an elemet was in the aray
    let elCount = {}
    for(let el of A){
      if(elCount[el]){
        elCount[el] +=1
      }else{
        elCount[el] =1
      }
    }
    for(let key in elCount){
      if(elCount[key]%2!==0){
        return key
      }
    }
  }