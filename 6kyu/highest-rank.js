// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr) {
  //loop through the arr and create a map
  let map = {};
  let highestCount = 0;
  let mostFrequent;
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      map[arr[i]]++;
    } else {
      map[arr[i]] = 1;
    }
    if (map[arr[i]] > highestCount) {
      highestCount = map[arr[i]];
      mostFrequent = arr[i];
    }
  }
  return mostFrequent;
}

function highestRank(arr) {
  var obj = {};
  arr.forEach(function (elem) {
    if (obj[elem] === undefined) obj[elem] = 0;
    obj[elem]++;
  });
  var keys = Object.keys(obj),
    highest = 0,
    key;
  keys.forEach(function (elem) {
    if (obj[elem] >= highest) {
      highest = obj[elem];
      key = elem;
    }
  });
  return parseInt(key);
}
