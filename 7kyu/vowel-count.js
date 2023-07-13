function getCount(str) {
    let vowels="aeiou";
    let count =0
    for(let i=0;i<str.length;i++){
      console.log(str[i])
      if(vowels.includes(str[i])){
        count++;
        
      }
    }
    return count;
  }

  function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   }