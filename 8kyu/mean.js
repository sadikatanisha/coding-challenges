function getAverage(marks) {
  //TODO : calculate the downward rounded average of the marks array
  //Parameter:array of numbers
  //Return: number
  //Example: [2,2,2,2] --> 2
  //PsuedoCode: get the sum of each elements within the array, then devide it with the length of the array
  //to round it down we can use math.floor
  return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);
}
console.log(getAverage([2, 2, 2, 2]), 2);
console.log(getAverage([1, 2, 3, 4, 5]), 3);
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1);
