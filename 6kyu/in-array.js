function inArray(array1, array2) {
    // Filter the substrings from array2 that exist in array1
   
    let substrings = array1.filter(substring=>array2.some(word=>word.includes(substring)))
  
    // Sort the substrings in lexicographical order
    substrings.sort();
  
    return substrings;
  }


  function inArray(array1,array2){
    return array1
      .filter(a1 => array2.find(a2 => a2.match(a1)))
      .sort()
  }