function squareDigits(num){
    //we can't use map on num so we have to turn num into an arrat
    let numarr =String(num).split("")
    
    return Number(numarr.map((el,i)=>el*el).join(""))
  }

  function squareDigits(num){
    return +num.toString().split('').map(i => i*i).join('');
  }

  