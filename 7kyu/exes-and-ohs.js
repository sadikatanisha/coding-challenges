//test cases
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


function XO(str) {
    let x =0;
    let o = 0;
  for(let i=0;i<str.length;i++){
    if(str[i].toUpperCase()=="X"){
      x++
    }else if(str[i].toUpperCase()=="O"){
      o++
    }
  }
  if(x == o){
    return true
  }else{
    return false
  }
}


const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }

  function XO(str) {
    var sum = 0;
    for(var i=0; i<str.length; i++){
      if(str[i].toLowerCase() == 'x') sum++;
      if(str[i].toLowerCase() == 'o') sum--;
    }
    return sum == 0;
  }