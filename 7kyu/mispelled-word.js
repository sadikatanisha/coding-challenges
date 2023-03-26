// mispelled('versed', 'xersed'); // returns true
// mispelled('versed', 'applb'); // returns false
// mispelled('versed', 'v5rsed'); // returns true
// mispelled('1versed', 'versed'); // returns true
// mispelled('versed', 'versed'); // returns true

function mispelled(word1, word2) {
    //when the difference between word1 and word2 is more than 1 ==> return false
    if(Math.abs(word1.length - word2.length) >= 2){
      return false;}
    //when the differene between word1 and word2 is equal to 1 ==> check if the characters matches 
    if(Math.abs(word1.length - word2.length) == 1){
      return (word1.includes(word2) || word2.includes(word1)); }  
   //if the length is same ==> check if the characters matches 
   let res = 0;
    for(let i = 0; i < word1.length; i++){  
      if(word1[i] !== word2[i])
      {
        res += 1;
    }  
    }
    //there can be only one differece 
    if(res <= 1) { return true;} 
    else { return false;}  
  }

