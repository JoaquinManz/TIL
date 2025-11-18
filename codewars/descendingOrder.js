// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

function descendingOrder(n){
  //...
  return Number(n.toString().split("").sort((a, b) => b - a).join(""))
}

// convert n to a string, split the string into an array of characters, sort the array in descending order, join it back, and convert it back to a Number