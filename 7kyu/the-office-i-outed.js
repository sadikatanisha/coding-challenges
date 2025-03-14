//  first I need to get all the values f each workers and calculate them
//  I need to find the boss value and add it again as its worth double
//  then I need to devide the total value with the number of people
//  if it's less than or equal 5 return "Get Out Now!" else return 'Nice Work Champ!'

function outed(meet, boss) {
  let totalScore = 0;
  const numberOfPeople = Object.keys(meet).length;
  for (let people in meet) {
    totalScore += meet[people];
    if (people == boss) {
      totalScore += meet[people];
    }
  }
  const avgScore = totalScore / numberOfPeople;
  return avgScore <= 5 ? "Get Out Now!" : "Nice Work Champ!";
}
console.log(
  outed(
    {
      tim: 0,
      jim: 2,
      randy: 0,
      sandy: 7,
      andy: 0,
      katie: 5,
      laura: 1,
      saajid: 2,
      alex: 3,
      john: 2,
      mr: 0,
    },
    "laura"
  ),
  "Get Out Now!"
);
