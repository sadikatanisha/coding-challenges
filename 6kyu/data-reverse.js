function dataReverse(data) {
  let res = [];
  for (let i = 0; i < data.length; i += 8) {
    res.push(data.slice(i, i + 8));
  }
  res = res.reverse();
  let concat = [];
  res.forEach((el) => concat.push(...el));
  return concat;
}

const data1 = [
  1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0,
  1, 0, 1, 0, 1, 0,
];
const data2 = [
  1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
  1, 1, 1, 1, 1, 1,
];
console.log(dataReverse(data1), data2);
// const data3 = [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1];
// const data4 = [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0];
// console.log(dataReverse(data3), data4);
