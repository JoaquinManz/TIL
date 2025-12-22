// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.
 
// https://www.codewars.com/kata/59cfc000aeb2844d16000075

function capitalize(s){
  let odd = '';
  let even = '';
  
  for(let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      even += s[i].toUpperCase();
      odd += s[i].toLowerCase();
    } else {
      even += s[i].toLowerCase();
      odd += s[i].toUpperCase();
    }
  }
  
  return [even, odd]
};

// create two empty strings, odd and even
// loop through each character in the input string s
// check if the index i is even or odd using the modulus operator (%)
// if i is even, append the uppercase version of the character to even and the lowercase version to odd
// if i is odd, append the lowercase version of the character to even and the uppercase version to odd
// finally, return an array containing the even and odd strings