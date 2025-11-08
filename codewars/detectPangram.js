// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string){
  //...
  const lowercase = string.toLowerCase();
  
  const letters = new Set();
  
  for(let char of lowercase) {
    if(char >= 'a' && char <= 'z') {
      letters.add(char)
    }
  }
  
  return letters.size === 26
}

// I find this exercise very interesting, even though i didn't know how to solve it. 
// Found two ways to solve it, first using Set, it's basically an arraty that can't have duplicates.
// Second, creating a string with all the letters of the alphabet and checking if the provided string contains all letters of the alphabet, if it does, return true, if not, return false.

// function isPangram(string) {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   const lower = string.toLowerCase();
  
//   
//   for (let letter of alphabet) {
//     if (!lower.includes(letter)) {
//       return false;  
//     }
//   }
  
//   return true;  
// }