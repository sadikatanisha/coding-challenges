function findShort(s){
    let arr = s.split(" ")
    return arr.map((el,i)=>el.length).sort((a,b)=>a-b)[0]
  
  }


  //others solutions

  function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}