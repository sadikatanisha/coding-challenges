function differenceInAges(ages) {
  let sorted = ages.sort((a, b) => a - b);
  let difference = sorted[sorted.length - 1] - sorted[0];
  return [sorted[0], sorted[sorted.length - 1], difference];
}

console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);
