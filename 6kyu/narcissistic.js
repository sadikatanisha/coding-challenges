
     // 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
     // 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
     function narcissistic(value) {
        //we need to convert the value from num to array
        let arr =  String(value).split("")
        //we need the length of the value for the power
        let n = arr.length
        
        
        //we need to map each value and reduce it to check if it's the same value
        let sum = arr.map(el=>Math.pow(el,n)).reduce((a,b)=>a+b,0)
        if(sum == value){
          return true
        }else{
          return false
        }
      
      }

      function narcissistic( value ) {
        let arr = ("" + value).split('')
        
        return arr.reduce((p, c)=>{
          return p + Math.pow(c, arr.length)
          }, 0) == value;
      }