// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c

function findNeedle(haystack) {
  // your code here

  // function indexOf('needle) returns the index of the first occurrence of the string 
  const index = haystack.indexOf('needle')
  // then return the message
  return `found the needle at position ${index}`
}