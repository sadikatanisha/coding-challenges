function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  let sum = [...arguments].map((el) => el * el).reduce((a, b) => a + b, 0);
  return Math.floor(Math.sqrt(sum) / 2);
}
