// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]


function openOrSenior(data){
    return data.map(el=>{
      if(el[0]>=55 && el[1]>7){
        return "Senior"
      }else{
        return "Open"
      }
    })
  }