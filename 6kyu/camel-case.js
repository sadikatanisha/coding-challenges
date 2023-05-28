// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"



function toCamelCase(str){
  
    let result = ""
    let nextCapital = false
    for(let i=0;i<str.length;i++){ 
        // result += arr[i][0].toUpperCase() + arr[i].slice(1)
      if(str[i]=="-" ||str[i]=="_"){
        nextCapital = true
      }else if(nextCapital){
         result += str[i].toUpperCase()
        nextCapital = false
      }else{
        result += str[i]
      }
    }
    return result
  
  }