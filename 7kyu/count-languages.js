function countLanguages(list) {
  let res = {};
  list.forEach((element) => {
    if (element.language) {
      if (res[element.language]) {
        res[element.language]++;
      } else {
        res[element.language] = 1;
      }
    }
  });
  return res;
}

var list = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
  },
  {
    firstName: "Ramon",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
  },
];

console.log(countLanguages(list), { C: 2, JavaScript: 1, Ruby: 1 });
