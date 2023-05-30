// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""


function order(words){
    const array = words.split(' ');
    const sortedArray = [];
  
    //loop through the main elements of the unsorted array
    for(i = 0; i <= array.length; i++) {
      //loop though the characters of each element
      for(j = 0; j < array.length; j++) {
        //check if an element is equal to the index of i
        if(array[j].indexOf(i) >= 0) {
          //push the element to the sorted array
          sortedArray.push(array[j]);
          
        }
      }
    }
    return sortedArray.join(' ');
  }