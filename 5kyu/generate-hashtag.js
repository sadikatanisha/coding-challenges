
//  It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag(str) {
  
    if(str == undefined){
      return false
    }
    let trimmedStr = str.trim()
    if (trimmedStr.length === 0) {
      return false;
    }else{
      const hashtag = "#" + trimmedStr
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  
    if (hashtag.length > 140) {
      return false;
    }
  
    return hashtag;
      
    }

    
  }



  function generateHashtag(str) {
    if (!str.trim()) return false;
  
    const result =
      '#' +
      str
        .split(' ')
        .map((l) => l.charAt(0).toUpperCase() + l.slice(1))
        .join('');
  
    return result.length > 140 ? false : result;
  }