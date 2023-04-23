//test cases
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false


function isIsogram(str){
    
    str = str.toLowerCase();
    for(let i = 0; i < str.length; ++i)
      for(let j = i + 1; j < str.length; ++j)
        if(str[i] === str[j])
          return false;
    return true;
  }


  function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}