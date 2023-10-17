var breakChocolate = function (n, m) {
  if (n <= 0 || m <= 0) {
    return 0; // Input data is invalid, no breaks needed
  } else {
    return n * m - 1; // Minimum number of breaks needed
  }
};

var breakChocolate = function (n, m) {
  return n * m === 0 ? 0 : n * m - 1;
};
