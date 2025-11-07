// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// https://www.codewars.com/kata/576b93db1129fcf2200001e6

function sumArray(array) {
    //if there is no array or the array has less than 2 elements, return 0
  if(!array || array.length <= 2) {
    return 0
  }
  //find max and min with Math.max and Math.min
  const max = Math.max(...array)
  const min = Math.min(...array)
  //use reduce to sum the array
  const total = array.reduce((sum, num) => sum + num, 0)
  //return the total minus the max and min
  return total - max - min;
  
}