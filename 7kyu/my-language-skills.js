// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

function myLanguages(results) {
  let languages = [];
  // console.log(results["Java"])
  for (language in results) {
    if (results[language] >= 60) {
      languages.push({ name: language, score: results[language] });
    }
  }

  return languages.sort((a, b) => b.score - a.score).map((el) => el.name);
}

console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }));
