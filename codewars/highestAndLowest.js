// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers){
  // split the string into an array 
  const nums = numbers.split(' ').map(Number);
  // return the array using Math.max and Math.min to get the highest and lowest values
  return `${Math.max(... nums)} ${Math.min(... nums)}`
}