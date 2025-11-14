// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// https://www.codewars.com/kata/55ecd718f46fba02e5000029


function between(a, b) {
  // your code here
  // create a counter variable, initialize it to an empty array
  const result = []
  //loop through the range of numbers between a and b, and push each number to the array
  for(let i = a; i <= b; i++) {
    result.push(i)
  }
  // return the array
  return result;
}

// Also, I thought about using a spread operator, but didn't know how to use it really. I searched, and found this:

// function between(a, b) {
//   return [...Array(b - a + 1)].map((_, i) => a + i);
// }