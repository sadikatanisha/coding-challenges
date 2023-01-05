const binaryArrayToNumber = arr => {

    //parseint is to convert integer to number * we put 2 as the second parameter as binary base is 2
    //arr.join is to convert arr to an integer
    return parseInt(arr.join(""),2) 
  };