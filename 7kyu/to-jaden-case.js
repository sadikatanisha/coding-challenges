// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"



String.prototype.toJadenCase = function (str) {
    //...
    let arr = str.split(" ")
    return arr.map((el,i)=> el[0].toUpperCase() + el.slice(1)).join(" ") 
  }



String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }


  tring.prototype.toJadenCase = function() {
    return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
  };