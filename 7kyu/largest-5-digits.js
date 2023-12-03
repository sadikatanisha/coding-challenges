//Parameter: String of digits
//Return: 5 digit integer
//Example:
//Psuedocode:

function solution(digits) {
  let answer = 0;

  for (let i = 0; i < digits.length; i++) {
    let number = digits.substr(i, 5); //each loop iteration pulls the next 5 digits into a substring
    if (Number(number) > answer) {
      //convert to number and compare against answer
      answer = Number(number);
    }
  }
  return answer;
}

// console.log(solution(number), 99890, "solution did not return correct value");
console.log(
  solution("1234567898765"),
  98765,
  "Failed when max 5 digits is at end of number"
);
console.log(solution("731674765"), 74765, "Failed in overlapping test");
