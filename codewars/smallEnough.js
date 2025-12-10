// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// https://www.codewars.com/kata/57cc981a58da9e302a000214

function smallEnough(a, limit){
  return a.every(num => num <= limit)
}

// Here I used the .every() method to check if all elements in the array are less than or equal to the limit. If they are, it returns true; otherwise, it returns false.