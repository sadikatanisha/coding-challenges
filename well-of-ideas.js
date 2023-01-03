// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.





//const well = x => {
//     const good_count = x.filter(x => x == 'good').length;
//     return good_count < 1 ? 'Fail!' : 
//            good_count < 3 ? 'Publish!' : 'I smell a series!';
//   }



function well(x){
    let counter = x.filter(x=>x==="good").length
    if(counter<1){
      return "Fail!"
    }else if(counter<=2){
      return "Publish!"
    }else{
      return "I smell a series!"
    } 
    
  
  }