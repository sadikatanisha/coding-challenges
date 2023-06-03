function reverseWords(str) {
    // Go for it
    let result =""
    let arr = str.split(" ")
    for(let i= 0;i<arr.length;i++){
      result += arr[i].split("").reverse().join("") + " "
    }
    return result.trim()
  }


  //

  function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }