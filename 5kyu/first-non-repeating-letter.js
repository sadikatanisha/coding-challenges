function firstNonRepeatingLetter(s) {
    let str = s.toLowerCase()
  
   
      for(let i=0;i<str.length;i++){
      // console.log(s.indexOf(s[i]))
      // console.log(s.lastIndexOf(s[i]))
      if(s.indexOf(str[i]) == s.lastIndexOf(str[i])){
        return s[i]
      }
    
    
      }
    return ""
    
  }