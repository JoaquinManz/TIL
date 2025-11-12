// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

// https://www.codewars.com/kata/56747fd5cb988479af000028

// I used slice to get the middle character
function getMiddle(s) {
  //Code goes here!
  let length = s.length;
  // got the middle character by dividing the length by 2
  let middle = Math.floor(length / 2);
  
  if (length % 2 === 0) {
    // if the length is even, return the middle 2 characters
    return s.slice(middle - 1, middle +1)
  } else {
    // if the length is odd, return the middle character
    return s.slice(middle, middle + 1)
  }
}