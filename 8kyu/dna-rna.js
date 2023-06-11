function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  return dna.split("").map((el)=> el=="T"? "U" : el).join("")
}

function DNAtoRNA(dna) {
    return dna.split("T").join("U")
  }
  
  console.log( DNAtoRNA("GCATT"))