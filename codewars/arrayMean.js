// Find the mean (average) of a list of numbers in an array.

function findAverage(nums) {
  // Code here
  let mean = nums.reduce((acc, current) => acc + current, 0) / nums.length;
  return mean
}

// I'm actually proud of this one, I remembered the reduce function and how to do the average :D