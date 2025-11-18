// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

const words = x.split(' ')
  
  let maxScore = 0
  let maxWord = ''
  
  for(let word of words){
    let score = 0
    for(let char of word){
      score += char.charCodeAt(0) - 96  // 'a' es 97, entonces a=1, b=2...
    }
    
    if(score > maxScore){
      maxScore = score
      maxWord = word
    }
  }
  
  return maxWord

  // gotta say i like this one, but i was not able to do it alone, but still understood the logic.