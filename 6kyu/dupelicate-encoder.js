// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 


function duplicateEncode(word){
    // ...
//make all the word lower case
// turn the string into an array so that we can use array method 
// we use map to map the word
//word.indexOf() === word.lastIndexOf() --> to check similarity
  let wordArr = word.toLowerCase().split("")
  return wordArr.map((el,i,w)=>w.indexOf(el) === w.lastIndexOf(el)? `(`: `)`).join("")

  

}

function duplicateEncode(word){
   
    var unique='';
    word = word.toLowerCase();
    for(var i=0; i<word.length; i++){
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            unique += '(';
        }
        else{
            unique += ')';
        }
    }
    return unique;

}