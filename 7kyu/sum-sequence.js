const sequenceSum = (begin, end, step) => {
  // May the Force be with you
  let sum = 0;
  for (let i = begin; i <= end; i += step) {
    sum = sum + i;
    console.log(sum);
  }
  return sum;
};
//i =1;1<=5;1+=1 --> 0 + 1 --> 1
//i =2; 2<=5;2+=1 --> 1+2 -->3
//i= 3; 3<=5; 3+= 3 --> 6
//i=4;4<=5; 6+= 4 --> 10
//i=5; 5<=5;10+=5 --> 15

console.log(sequenceSum(2, 6, 2), 12);
console.log(sequenceSum(1, 5, 1), 15);
console.log(sequenceSum(1, 5, 3), 5);
