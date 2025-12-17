// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f

"use strict";

function flattenAndSort(array) {
  // Good luck, brave code warrior!
  return array.flat(Infinity).sort((a, b) => a - b)
}

// learned about flat method and infinity parameter to flatten multi dimensional arrays