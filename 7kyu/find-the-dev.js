//You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.
//Parameter: array of Objects
//Return: String
//Example: var list1 = [
//   { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//   { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
// ]; --> Victoria, Puerto Rico
//Psuedocode:

function getFirstPython(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].language === "Python") {
      return `${list[i].firstName}, ${list[i].country}`;
    }
  }
  return "There will be no Python developers";
}

var list1 = [
  {
    firstName: "Mark",
    lastName: "G.",
    country: "Scotland",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 30,
    language: "Python",
  },
  {
    firstName: "Emma",
    lastName: "B.",
    country: "Norway",
    continent: "Europe",
    age: 19,
    language: "Clojure",
  },
];

var list2 = [
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 29,
    language: "JavaScript",
  },
  {
    firstName: "Amar",
    lastName: "V.",
    country: "Bosnia and Herzegovina",
    continent: "Europe",
    age: 32,
    language: "Ruby",
  },
];

console.log(getFirstPython(list1), "Victoria, Puerto Rico");
console.log(getFirstPython(list2), "There will be no Python developers");

//
function getFirstPython(list) {
  const dev = list.find((x) => x.language === "Python");
  return dev
    ? `${dev.firstName}, ${dev.country}`
    : "There will be no Python developers";
}
