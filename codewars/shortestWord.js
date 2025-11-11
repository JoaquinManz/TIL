// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

// I think that this solution might not be the best one, but this is what I came up with

function findShort(s){
  const words = s.split(" ");
  let shortestWord = words[0];
  
  for(let i = 1; i < words.length; i++) {
    const currentWord = words[i];
    
    if(currentWord.length < shortestWord.length) {
      shortestWord = currentWord
    }
  }
  return shortestWord.length
}