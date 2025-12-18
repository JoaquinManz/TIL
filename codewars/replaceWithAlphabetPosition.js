// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

// https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
    // we create a result array to hold the positions
  let result = []
  
  // we loop through each character in the text after converting it to lowercase
  for(let char of text.toLowerCase()) {
    // if the character is a letter, we get its position with ascii and push it to the result array
    if (char >= 'a' && char <= 'z') {
      const position = char.charCodeAt(0) - 96;
      result.push(position)
    }
  }
  // we join the result array into a string with spaces and return it
  return result.join(" ")
}

// this excercise might be one of my favorites, it's great practice for string manipulation and understanding character encoding!