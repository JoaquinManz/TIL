// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

// https://www.codewars.com/kata/57fae964d80daa229d000126

function remove (string) {
  //coding and coding....
  return string.endsWith("!") ? string.slice(0, -1) : string;
}

// endsWith is a method that checks if a string ends with a given substring, if it does it returns true, otherwise false. 
// Then used slice to remove the last character of the string if it ends with an exclamation mark.