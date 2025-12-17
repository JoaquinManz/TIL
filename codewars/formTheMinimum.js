// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). Only positive integers in the range of 1 to 9 will be passed to the function.

// Examples
// [1, 3, 1] ==> 13
// [5, 7, 5, 9, 7] ==> 579
// [1, 9, 3, 1, 7, 4, 6, 6, 7]  ==> 134679

// https://www.codewars.com/kata/5ac6932b2f317b96980000ca

function minValue(values){
  //your code here
  // create a new array with non duplicated values
  const unique = [...new Set(values)];
  // sort the array
  unique.sort((a, b) => a - b)
  // join the array with an empty string and convert to number
  return Number(unique.join(""))
}