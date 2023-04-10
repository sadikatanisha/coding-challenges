
function divCon(x){
    let add = 0, div = 0
    x.forEach(el=> typeof(el)=="number"? add += el : div += Number(el))
    return add - div
  
  }


  function divCon(x){
    return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
  }