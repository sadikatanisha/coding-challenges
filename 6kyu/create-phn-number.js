function createPhoneNumber(numbers){
    let first = numbers.slice(0,3).join("")
    let second = numbers.slice(3,6).join("")
    let third = numbers.slice(6,10).join("")
    return `(${first}) ${second}-${third}`
    
    
  }

  function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }