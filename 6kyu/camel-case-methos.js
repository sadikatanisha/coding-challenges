// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"


String.prototype.camelCase = function() {
    if (this.length > 0) {
      return this.split(" ").map(el => el[0].toUpperCase() + el.slice(1)).join("");
    } else {
      return "";
    }
  };


  String.prototype.camelCase=function(){
    return this.split(' ').map(function(word){
     return word.charAt(0).toUpperCase() + word.slice(1);
   }).join('');
 }


 String.prototype.camelCase=function(){
    const capitalize = (word) => {
      return word.slice(0,1).toUpperCase() + word.slice(1)
    }
    
    return this
      .split(' ')
      .map(capitalize)
      .join('')
  }

