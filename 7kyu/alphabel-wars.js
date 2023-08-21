// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1

//PREP:
//Parameter:string
//Return: string
//Example:alphabetWar("z");        //=> Right side wins!  |  alphabetWar("zdqmwpbs"); //=> Let's fight again!
//Psudocode: loop through the parameter and count their assigned values then run a comparison


function alphabetWar(fight) {
    const powerMap = {
       w: 4,
       p: 3,
       b: 2,
       s: 1,
       m: -4,
       q: -3,
       d: -2,
       z: -1,
    };
 
    let totalPower = 0;
 
    for (let char of fight) {
       if (powerMap[char]) {
          totalPower += powerMap[char];
       }
    }
 
    if (totalPower > 0) {
       return "Left side wins!";
    } else if (totalPower < 0) {
       return "Right side wins!";
    } else {
       return "Let's fight again!";
    }
 }
 
 console.log(alphabetWar("z")); // Right side wins!
 console.log(alphabetWar("zdqmwpbs")); // Let's fight again! 

 
 function alphabetWar(fight) {
    let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
    let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
    return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
}