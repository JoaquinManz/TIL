// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051

function digitize(n) {
  //code here
  // use String(n) to convert the number given to a string
  // use split('') to split the string into an array of characters
  // use reverse() to reverse the array
  // use map() to convert each character to a number
  return String(n).split('').reverse().map(Number)
}