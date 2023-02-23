


function sumNoDuplicates(numList) {
    let sum =0
    
    for(let i=0;i<numList.length;i++){
        
        
      if(numList.indexOf(numList[i])===numList.lastIndexOf(numList[i])){
        sum += numList[i]
      }
    }
    
    return sum
  }

  function sumNoDuplicates(numList) {
    const uniqueArr=numList.filter((num,index)=>numList.indexOf(num)===index&&numList.lastIndexOf(num)===index)
    return uniqueArr.reduce((x,y)=>x+y,0);
    }