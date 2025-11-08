// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

const reverseSeq = n => {
    //create an array to store the numbers
  let arr = []

    // create a for loop that starts at n and ends at 1
  for (let i = n; i > 0; i--) {
    // push the number to the array
    arr.push(i)
  }
    //return the array
  return arr;
};