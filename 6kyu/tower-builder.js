function towerBuilder(nFloors) {
    let tower = []; 
    for (let i = 1; i <= nFloors; i++) {
      let space = " ".repeat(nFloors - i); 
      let asterisk = "*".repeat(2 * i - 1); 
  
      let level = space + asterisk + space;
      tower.push(level);
    }
  
    return tower; // Return the complete tower
  }


  function towerBuilder(n) {
    return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
  }