// If you can't sleep, just count sheeps!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

var countSheep = function (num){
  //your code here
  // empty string to accumulate the result
  let result = "";

  for (let i = 1; i <= num; i++) {
    // add the current number to the result with a string 
    result += `${i} sheep...`
  }
  return result;
}