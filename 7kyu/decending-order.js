function descendingOrder(n){
    let arr = String(n).split("")
    // return n.sort((a,b)=>b-a).join("")
    return Number(arr.sort((a,b)=>b-a).join(""))
  }

  function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }