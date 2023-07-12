function disemvowel(str) {
    let vowel= ['a','e','i','o','u',"A","E","I",'O',"U"];
    return str.split("").filter((el,i)=> vowel.includes(el)==false).join("")
  }


  const vowels = 'aeiou';

  function disemvowel(str) {
    return str
      .split('')
      .filter(letter => !vowels.includes(letter.toLowerCase()))
      .join('');
  }
