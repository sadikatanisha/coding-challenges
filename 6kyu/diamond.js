//Calculate spaces for the diamonds
//    *
//  * * *
//* * * * *
//  * * *
//    *

function diamond(n) {
    if (n<0 || n%2 == 0 ){
        return null
      } 
  let res = "";
  let middle = Math.floor(n / 2) + 1; // Calculate the middle row


  for (let i = 1; i <= n; i++) {
    let spaces = Math.abs(middle - i); // Calculate spaces before *
    let stars = n - 2 * spaces; // Calculate the number of * for this row

    // Concatenate spaces and stars for each row
    res += " ".repeat(spaces) + "*".repeat(stars) + "\n";
  }

  return res;
}

// console.log(diamond(1), "*\n");
console.log(diamond(3), "*\n***\n *\n");
// console.log(diamond(5), "  *\n ***\n*****\n ***\n  *\n");

//1
//1**2 +2 = 3
//1**2 + 2**2 = 5
