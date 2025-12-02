// You are given two sorted arrays that contain only integers. These arrays may be sorted in either ascending or descending order. Your task is to merge them into a single array, ensuring that:

// The resulting array is sorted in ascending order.

// Any duplicate values are removed, so each integer appears only once.

// If both input arrays are empty, return an empty array.

// No input validation is needed, as both arrays are guaranteed to contain zero or more integers.

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
// Happy coding!

// https://www.codewars.com/kata/5899642f6e1b25935d000161

function mergeArrays(arr1, arr2) {
  
  function normalizeAscending (arr) {
    if (arr.length <= 1) return arr;
    return arr[0] <= arr[arr.length - 1] ? arr : arr.slice().reverse();
  }
  
  const a = normalizeAscending(arr1);
  const b = normalizeAscending(arr2);
  
  const merged = [...new Set([...a, ...b])].sort((x, y) => x - y);
  
  return merged;
}

// I wanted to include a helper function to normalize the arrays to ascending order first, to make the code more readable.
// I believe this is a bit higher level than what I know about JavaScript, but I try to keep learning.