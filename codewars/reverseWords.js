// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

function reverseWords(str) {
  // Go for it

  // Split the string into an array of words
  const words = str.split(' ');
  // this function will reverse each word by using the split('').reverse('').join('') method
  const reversedWords = words.map(word => {
    return word.split('').reverse('').join('')
  });
  
  // Join the array back into a string with a space in between each word
  return reversedWords.join(' ');
}