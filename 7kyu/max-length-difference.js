function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }
  const len1 = a1.map((el) => el.length);
  const len2 = a2.map((el) => el.length);
  const diff1 = Math.max(...len1) - Math.min(...len2);
  const diff2 = Math.max(...len2) - Math.min(...len1);
  return Math.max(diff1, diff2);
}
