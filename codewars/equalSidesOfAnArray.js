// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.

// If there is no index that would make this happen, return -1.

// For example:
// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most languages the index of an array starts at 0.

// Input
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// Note
// If you are given an array with multiple answers, return the lowest correct index.

// https://www.codewars.com/kata/5679aa472b8f57fb8c000047

function findEvenIndex(arr) {
  //Code goes here!
    // for loop that iterates through the array
    for(let i = 0; i < arr.length; i++) {
      // create leftSum variable to store the sum of the numbers to the left of i
      let leftSum = 0;
      // for loop that iterates through the numbers to the left of i
      for(let j = 0; j < i; j ++) {
        // add the number to the left of i to leftSum
        leftSum += arr[j]
      }
      // create rightSum variable to store the sum of the numbers to the right of i
      let rightSum = 0
      // for loop that iterates through the numbers to the right of i. To do this, k has to be i + 1.
      for(let k = i + 1; k < arr.length; k++) {
        // add the number to the right of i to rightSum
        rightSum += arr[k];
      }
      // if the leftSum is equal to the rightSum, return i
      if (leftSum === rightSum) {
        return i
      }
    }
  // if the for loop finishes without returning, return -1
  return -1;
}

// I must say that I was not able to solve it by myself, I got some help from claude ai, however I still think that I understood the exercise which is the important thing.