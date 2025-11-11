// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// https://www.codewars.com/kata/576bb71bbbcf0951d5000044


function countPositivesSumNegatives(input) {
  // your code here
  // check if theres an input or if its empty, return empty array in both cases
  if(!input || input.length === 0) return []
  
  // initialize countPositives and sumNegatives to 0
  let countPositives = 0;
  let sumNegatives = 0;
  
  // if num > 0, add 1 to countPositives. if num < 0, add num to sumNegatives
  input.forEach(num => {
    if(num > 0) {
      countPositives++; 
    } else if (num < 0) {
      sumNegatives += num;
    }
  })
  return [countPositives, sumNegatives]
}