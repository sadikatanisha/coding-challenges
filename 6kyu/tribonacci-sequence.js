//test cases
  // doTest([ [1,1,1], 10], [1,1,1,3,5,9,17,31,57,105]   )
  // doTest([ [0,0,1], 10], [0,0,1,1,2,4,7,13,24,44]     )
  // doTest([ [0,1,1], 10], [0,1,1,2,4,7,13,24,44,81]    )
  // doTest([ [1,0,0], 10], [1,0,0,1,1,2,4,7,13,24]      )
  // doTest([ [0,0,0], 10], [0,0,0,0,0,0,0,0,0,0]        )
  // doTest([ [1,2,3], 10], [1,2,3,6,11,20,37,68,125,230])
  // doTest([ [3,2,1], 10], [3,2,1,6,9,16,31,56,103,190] )
  // doTest([ [1,1,1],  1], [1])

  function tribonacci(signature,n){
    //we need to make a sequence till array.length = n
    //we need to keep pushing the sum of last 3 nums to the array
   
    while(n<signature.length){
      signature.pop()
    }
    
    while(signature.length < n){
      let sum = 0
      let arr = signature.slice(signature.length-3,signature.length)
      // console.log(arr)
      for(let i= arr.length-1;i>=0;i--){
      
      sum += arr[i]
       
    }
      signature.push(sum)
      
    }
  
    
    // while()
    return signature
    
    
  }


  //best practices
  function tribonacci(signature,n){  
    for (var i = 0; i < n-3; i++) { // iterate n times
      signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
    }
    return signature.slice(0, n); //return trib - length of n
  }

  function tribonacci(signature,n) {
    const result = signature.slice(0, n);
    while (result.length < n) {
      result[result.length] = result.slice(-3).reduce((p,c) => p + c, 0);
    }
    return result;
  }
