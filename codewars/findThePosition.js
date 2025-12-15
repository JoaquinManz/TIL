// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Output :: "Position of alphabet: 1"

// Note: Only lowercased English letters are tested

// https://www.codewars.com/kata/5808e2006b65bff35500008f

function position(letter){
  //Write your own Code!
  const pos = letter.charCodeAt(0) - 96;
  
  return `Position of alphabet: ${pos}`
}

// I remembered that there was a method to get the ascii code of a letter, but had to look it up.
// used charCode at 0 to get the code, and then substracted 96 to get the position in the alphabet.