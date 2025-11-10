// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
    // create a variable to store the vowels
  const vowels = 'aeiou'
  // create a variable to store the count
  let count = 0;
  
  // loop through the string
  for(let char of str) {
    // if the character is a vowel, add it to the count
    if(vowels.includes(char)) {
      count++;
    }
  }
  //return the count
  return count;
}