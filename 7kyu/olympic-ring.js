//To celebrate the start of the Rio Olympics (and the return of 'the Last Leg' on C4 tonight) this is an Olympic inspired kata.

//Given a string of random letters, you need to examine each. Some letters naturally have 'rings' in them. 'O' is an obvious example, but 'b', 'p', 'e', 'A', etc are all just as applicable. 'B' even has two!! Please note for this kata you can count lower case 'g' as only one ring.

//Your job is to count the 'rings' in each letter and divide the total number by 2. Round the answer down. Once you have your final score:

//if score is 1 or less, return 'Not even a medal!'; if score is 2, return 'Bronze!'; if score is 3, return 'Silver!'; if score is more than 3, return 'Gold!';

//Dots over i's and any other letters don't count as rings.

function olympicRing(a){
    //set a counter
    let counter =0;
    //arr of small letter 1 ring
    let ringsSingle= ["a","e","o","b","d","g","p","q","A","D","O","P","Q","R"]
    //arr of capital leter 1 ring
    //arr of muliple rings
    //turn the input string into an array
    //check if it contains 1 or 2
    // increment count
    //devided he total number by 2 and round it down
    //
    let doubleRing = ["B"]
    
    let input = a.split("")

    for(let i=0;i<input.length;i++){
      if(ringsSingle.includes(input[i])){
        counter++
      }else if(doubleRing.includes(input[i])){
        counter +=2;
      }else{
        counter;
      }
    }
    
    let total = Math.floor(counter/2)
    if(total<=1){
      return "Not even a medal!"
    }else if(total===2){
      return "Bronze!"
    }else if(total===3){
      return "Silver!"
    }else if(total>3){
      return "Gold!"
    }
    
    
    
    
  }


  console.log(olympicRing('wHjMudLwtoPGocnJ'))

  //better solution
  const olympicRing = (str) =>{
    const out = [...str].map(el => 'qeopadgbQROPAD'.includes(el) ? 1 : el === 'B' ? 2 : 0).reduce((a, b)=> a+b, 0) / 2 
    return out < 2 ? 'Not even a medal!' : out < 3 ? 'Bronze!' : out < 4 ? 'Silver!' : 'Gold!'
  }