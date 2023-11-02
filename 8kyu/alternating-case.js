String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((char) =>
      char == char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
};
const isLowerCase = (char) => char.toLowerCase() === char;
const swapCase = (char) =>
  isLowerCase(char) ? char.toUpperCase() : char.toLowerCase();

String.prototype.toAlternatingCase = function () {
  return [...this].map(swapCase).join("");
};
