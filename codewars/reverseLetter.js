// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b

function reverseLetter(str) {
  //coding and coding..
  return str.replace(/[^a-z]/gi, '').split("").reverse().join("")
}

// I had to go out of my comfort zone and try to solve this one with regex, the replace methos is basically saying that I want to replace every character that is not a letter with an empty string.
// then I split the string into an array of characters and reverse it, and then join it back together.