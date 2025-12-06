// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

function take(arr, n) {
  // Your code here
  return arr.slice(0, n)
}

// I was trying to do this with a for loop, but I remembered that slice exists and is perfect for this task.