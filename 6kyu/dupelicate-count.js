function duplicateCount(text){
    text = text.toLowerCase()
    let charMap ={}
    let count = 0
    for(let char of text ){
      console.log(charMap)
      if(charMap[char]){
        charMap[char]++
      }else{
        charMap[char]=1 
      }
    }
    
    
    for(let char in charMap){
      if(charMap[char]>1){
        count++
      }
    }
    return count
  }
  
  console.log(duplicateCount("Indivisibilities"))

  //
  function duplicateCount(text){
    return text.toLowerCase().split('').filter(function(val, i, arr){
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
  }