function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}


function isIsogram(str){
    //Create array from string and make it uppercased
    var arr = str.split('').map(function(el) {
      return el.toUpperCase();
    }); 
    //Test each value for duplicates.
    return arr.every(function(el) {
      return arr.indexOf(el) == arr.lastIndexOf(el);
    });
  }