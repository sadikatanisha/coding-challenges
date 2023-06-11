function solution(string) {
    let result = []
    let arr = string.split("")
     arr.forEach((el,i)=>{
      
      if(el==el.toUpperCase()){
        result.push(" ")
        result.push(el)
      }else{
        result.push(el)
      }
      })
    return result.join("")
      
  }



  function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
  }