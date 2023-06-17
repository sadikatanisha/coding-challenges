// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


function solution(str) {
    let result = [];
    let arr = str.split("");
    if (arr.length % 2 !== 0) {
      arr.push("_");
    }
  
    for (let i = 0; i < arr.length; i += 2) {
      result.push(arr.slice(i, i + 2).join(""));
    }
  
    return result;
  }
  
  console.log(solution("abcdef")); // Output: ['ab', 'cd', 'ef']
  