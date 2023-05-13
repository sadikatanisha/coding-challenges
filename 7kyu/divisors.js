function divisors(integer) {
    let result = []
    for(let i= 2;i<integer;i++){
      if(integer%i == 0){
        result.push(i)
      }
    }
    if(result.length==0){
      return `${integer} is prime`
    }else{
      return result
    }
   
 }


 //
 function divisors(integer) {
	var divs = [];
  
  for(var i = 2; i < integer; i++) {
    if(integer % i === 0) {
    	divs.push(i);
    }
  }
  
  return divs.length ? divs : integer + ' is prime';
};