// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""



function maskify(cc) {
    let arr = cc.split("")
    if(arr.length>4){
      return arr.slice(0,cc.length-4).map(el=> "#").join("") + cc.slice(-4)
    }else{
      return cc
    }
     
}

//

function maskify(cc) {
    return '#'.repeat(cc.slice(0, -4).length) + cc.slice(-4);
  }