// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

//Param: string
//Result: string
//Example:(areYouPlayingBanjo("Paul"), "Paul does not play banjo")/(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
//Psuedo Code: if name starts with "R" || 'r' return "name" + "plays banjo" else 'name' + does not play play banjo


function areYouPlayingBanjo(name) {
   
    if(name[0]=='R' || name[0]=='r'){
        return `${name} plays banjo`
    }else{
        return `${name} does not play banjo`
    }
  }

  function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
  }