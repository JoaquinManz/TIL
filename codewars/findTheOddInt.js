// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  //happy coding!

  //initialize a count 
  const count = {};
  // loop through the array and increment the count. Also increment if the number is zero.
  for(let num of A) {
    count[num] = (count[num] || 0) + 1;
  }
  // loop through count and return num, turned into a Number, if the count is odd.
  for(let num in count) {
    if(count[num] % 2 !== 0) {
      return Number(num)
    }
  }
}
