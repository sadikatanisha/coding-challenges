//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b


function arrayMadness(a, b) {
    // Ready, get set, GO!!!
    let sumA = a.reduce((a,b)=>a+b**2,0)
    let sumB= b.reduce((a,b)=>a+b**3,0)
    
    return sumA > sumB
  }
