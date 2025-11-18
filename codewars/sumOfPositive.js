// Task
// You get an array of numbers, return the sum of all of the positives ones.

// Example
// [1, -4, 7, 12] => 
// 1
// +
// 7
// +
// 12
// =
// 20
// 1+7+12=20
// Note
// If there is nothing to sum, the sum is default to 0.

// https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  let positiveNumbers = arr.filter(n => n >= 0);
  return positiveNumbers.reduce((a, b) => a + b, 0)
}

// create a variable that will filter all negative numbers from the array, then use reduce method to sum all positive numbers