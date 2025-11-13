// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

// https://www.codewars.com/kata/5b853229cfde412a470000d0

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  return Math.abs(dadYearsOld - 2 * sonYearsOld)
}

// learned about Math.abs(), If x is negative or -0, returns its opposite number -x (which is non-negative). Otherwise, returns x itself. The result is therefore always a positive number or 0.