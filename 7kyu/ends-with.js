function solution(str, ending){
    // TODO: complete
    //check the length of the ending
    let len = ending.length
    //splice the string with the same number
    //check if these two are similar 
    //return true or false based on that
  
    // return (str.slice(-len)==ending)? true: false
    if(len == 0) return true
    if(str.slice(-len)==ending){
      return true 
    }else{
      return false
    }  
  }

  
  
  const solution = (str, ending) => str.endsWith(ending);