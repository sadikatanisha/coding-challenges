function highAndLow(numbers){
    //
    let sorted = numbers.split(" ").sort((a,b)=>b-a)
    let ans = [sorted[0],sorted[sorted.length-1]].join(" ")
    
    return ans
    
  }

  