// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// https://www.codewars.com/kata/558fc85d8fd1938afb000014

function sumTwoSmallestNumbers(numbers) {  
  // Code here

  // sort method to sort the array from lowest to highest, that's why a - b. and then slice to "extract" a portion of the array, being the first two elements
  const [first, second] = numbers.sort((a, b) => a - b).slice(0, 2)
  // then return the two numbers added together
  return first + second;
}