// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this


function likes(names) {
  
    //check if the array is empty or not
    //check if there's 1 person
    //check if there's more than 1 person 
    
    // check if here's 2 person
    //check if htere's 3 peson
    //check if there's more than 3 person
    if(names.length==0){
      return "no one likes this"
    }
    if(names.length==1){
      return `${names[0]} likes this`
    }
    if(names.length==2){
      return `${names[0]} and ${names[1]} like this`
    }
    if(names.length==3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
    if(names.length>3){
      return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    }
  }

  

  function likes(names) {
    names = names || [];
    switch(names.length){
      case 0: return 'no one likes this'; break;
      case 1: return names[0] + ' likes this'; break;
      case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
      case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
      default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
  }