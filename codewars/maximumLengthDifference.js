// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string

// https://www.codewars.com/kata/5663f5305102699bad000056

function mxdiflg(a1, a2) {
    // your code
  if (a1.length === 0 || a2.length === 0) return -1
  
  const lengths1 = a1.map(s => s.length)
  const lengths2 = a2.map(s => s.length)
  
  const min1 = Math.min(...lengths1);
  const max1 = Math.max(...lengths1);
  const min2 = Math.min(...lengths2);
  const max2 = Math.max(...lengths2);
  
  return Math.max(max1 - min2, max2 - min1)
}

// I started by checking if either array was empty, returning -1 if so.
// Then I created two arrays, one for each array, with the length of each string in the array.
// I then used Math.min and Math.max to find the minimum and maximum length of each array.
// Finally, I used Math.max to find the maximum difference between the two minimum lengths.

// To be honest, this was really difficult to understand, but I think I got it.