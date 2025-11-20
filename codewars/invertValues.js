// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []
// You can assume that all values are integers. Do not mutate the input array.

// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

function invert(array) {
   return array.map(a => -a)
}

// this can be done with .map method, it creates a new array based on a given one.

// or my first solution which was using a for loop, like this: 

function invert(array) {
  const result = []
  for(let num of array) {
    result.push(-num)
  }
  return result
}