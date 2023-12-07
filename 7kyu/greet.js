var greet = function (name) {
  let name1 = name.toLowerCase();
  let formattedName =
    name1.toLowerCase().charAt(0).toUpperCase() + name1.slice(1);
  return `Hello ${formattedName}!`;
};
console.log(greet("BILLY"), "Hello Riley!");
