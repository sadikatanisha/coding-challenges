
function minSum(arr) {
    // your code here
    let result = []
    
    let sorted = arr.sort((a,b)=>a-b)
    for(let i=0;i<sorted.length/2;i++){
      let total = sorted[i] * sorted[arr.length-1-i];
      result.push(total)
    
      
    }
    return result.reduce((el,t)=>el+t,0)
  }

  function minSum(arr) {
    return arr.sort( (a,b) => a-b )
              .slice(0, arr.length/2)
              .reduce( (acc,curr,index) => acc += curr * arr[ arr.length - index - 1 ], 0 )
  } 