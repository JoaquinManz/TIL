// Write a program that finds the summation of every number from 1 to num (both inclusive). The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// https://www.codewars.com/kata/55d24f55d7dd296eb9000030

var summation = function (num) {
  // Code here
  // initialize a variable sum to 0
  let sum = 0;
  // loop from 1 to num
  for (let i = 1; i <= num; i++) {
    // add i to sum
   sum += i; 
  }
  // return sum
  return sum;
}