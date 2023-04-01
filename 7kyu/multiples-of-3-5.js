function solution(number){
    let sum =0;
    for(let i= number-1;i>=0;i--){
      console.log(i)
      if(i%3==0 || i%5==0){
        sum += i
        
      }
    }
    return sum
    
  }
  

  function solution(number){
    var sum = 0;
    
    for(var i = 1;i< number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
  }